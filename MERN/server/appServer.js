const mongoose = require("mongoose")
const express = require("express")
const { connectDB } = require("./connectDB.js")
const { populatePokemons } = require("./populatePokemons.js")
const { getTypes } = require("./getTypes.js")
const { handleErr } = require("./errorHandler.js")
const morgan = require("morgan")
const cors = require("cors")


const {
  PokemonBadRequest,
  PokemonBadRequestMissingID,
  PokemonBadRequestMissingAfter,
  PokemonDbError,
  PokemonNotFoundError,
  PokemonDuplicateError,
  PokemonNoSuchRouteError,
  PokemonAuthError
} = require("./errors.js")

const { asyncWrapper } = require("./asyncWrapper.js")

const dotenv = require("dotenv")
dotenv.config();


const app = express()
// const port = 5000
var pokeModel = null;

const start = asyncWrapper(async () => {
  await connectDB({ "drop": false });
  const pokeSchema = await getTypes();
  // pokeModel = await populatePokemons(pokeSchema);
  pokeModel = mongoose.model('pokemons', pokeSchema);

  app.listen(process.env.pokeServerPORT, (err) => {
    if (err)
      throw new PokemonDbError(err)
    else
      console.log(`Phew! Server is running on port: ${process.env.pokeServerPORT}`);
  })
})
start()
app.use(express.json())
const jwt = require("jsonwebtoken")
// const { findOne } = require("./userModel.js")
const userModel = require("./userModel.js")
const { application } = require("express")

const authUser = asyncWrapper(async (req, res, next) => {
  // const to ken = req.header('auth-token')
  const token = req.query.appid
  if (!token) {
    throw new PokemonAuthError("No Token: Please provide an appid query parameter.")
  }
  const userWithToken = await userModel.findOne({ token })
  if (!userWithToken || userWithToken.token_invalid) {
    throw new PokemonAuthError("Please Login.")
  }
  try {
    // console.log("token: ", token);
    const verified = jwt.verify(token, process.env.TOKEN_SECRET) // nothing happens if token is valid
    next()
  } catch (err) {
    throw new PokemonAuthError("Invalid user.")
  }
})

const authAdmin = asyncWrapper(async (req, res, next) => {
  const user = await userModel.findOne({ token: req.query.appid })
  if (user.role !== "admin") {
    throw new PokemonAuthError("Access denied")
  }
  next()
})

// We want to use this wrapper function to wrap all our async functions
const authAdminApi = asyncWrapper(async (req, res, next) => {
  const user = await userModel.findOne({ token: req.query.appid })
  const trimUrl = req.originalUrl.split("?")[0] // when you send the request for any user, you need the app API but you don't want it in the user model (I am trimming after the "?")
  if (user) {
    const api = await user.api.find(api => api.url === trimUrl)
    if (api) {
      await user.updateOne(
        {
          api: user.api.map(api => {
            if (api.url === trimUrl) {
              return {
                url: trimUrl,
                count: api.count + 1
              }
            }
            return api
          })
        }
      )
    } else {
      user.api.push({
        url: trimUrl,
        count: 1
      })
    }
  }
  await user.save()
  next()
})

app.use(cors())

app.use(authAdminApi)

// app.use(morgan("tiny"))
app.use(morgan(":method"))

app.get('/topusers', asyncWrapper(async (req, res) => {
  const users = await userModel.find()
  // const topApi = users.map(user => {
  //   return user.api
  // }).flat().sort((a, b) => b.count - a.count).slice(0, 10)
  res.send(users)
}))

app.get('/uniqueapi', asyncWrapper(async (req, res) => {
  const users = await userModel.find()
  // const topApi = users.map(user => {
  //   return user.api
  // }).flat().sort((a, b) => b.count - a.count).slice(0, 10)
  res.send(users)
}))

app.get('/topapi', asyncWrapper(async (req, res) => {
  const users = await userModel.find()
  // const topApi = users.map(user => {
  //   return user.api
  // }).flat().sort((a, b) => b.count - a.count).slice(0, 10)
  res.send(users)
}))


app.use(authUser) // Boom! All routes below this line are protected
app.get('/api/v1/pokemons', asyncWrapper(async (req, res) => {
  if (!req.query["count"])
    req.query["count"] = 10
  if (!req.query["after"])
    req.query["after"] = 0
  // try {
  const docs = await pokeModel.find({})
    .sort({ "id": 1 })
    .skip(req.query["after"])
    .limit(req.query["count"])
  res.json(docs)
  // } catch (err) { res.json(handleErr(err)) }
}))

app.get('/api/v1/pokemon', asyncWrapper(async (req, res) => {
  // try {
  const { id } = req.query
  const docs = await pokeModel.find({ "id": id })
  if (docs.length != 0) res.json(docs)
  else res.json({ errMsg: "Pokemon not found" })
  // } catch (err) { res.json(handleErr(err)) }
}))
app.get("*", (req, res) => {
  // res.json({
  //   msg: "Improper route. Check API docs plz."
  // })
  throw new PokemonNoSuchRouteError("");
})

app.use(authAdmin)
app.post('/api/v1/pokemon/', asyncWrapper(async (req, res) => {
  // try {
  console.log(req.body);
  if (!req.body.id) throw new PokemonBadRequestMissingID()
  const poke = await pokeModel.find({ "id": req.body.id })
  if (poke.length != 0) throw new PokemonDuplicateError()
  const pokeDoc = await pokeModel.create(req.body)
  res.json({
    msg: "Added Successfully"
  })
  // } catch (err) { res.json(handleErr(err)) }
}))

app.delete('/api/v1/pokemon', asyncWrapper(async (req, res) => {
  // try {
  const docs = await pokeModel.findOneAndRemove({ id: req.query.id })
  if (docs)
    res.json({
      msg: "Deleted Successfully"
    })
  else
    // res.json({ errMsg: "Pokemon not found" })
    throw new PokemonNotFoundError("");
  // } catch (err) { res.json(handleErr(err)) }
}))

app.put('/api/v1/pokemon/:id', asyncWrapper(async (req, res) => {
  // try {
  const selection = { id: req.params.id }
  const update = req.body
  const options = {
    new: true,
    runValidators: true,
    overwrite: true
  }
  const doc = await pokeModel.findOneAndUpdate(selection, update, options)
  // console.log(docs);
  if (doc) {
    res.json({
      msg: "Updated Successfully",
      pokeInfo: doc
    })
  } else {
    // res.json({ msg: "Not found", })
    throw new PokemonNotFoundError("");
  }
  // } catch (err) { res.json(handleErr(err)) }
}))

app.patch('/api/v1/pokemon/:id', asyncWrapper(async (req, res) => {
  // try {
  const selection = { id: req.params.id }
  const update = req.body
  const options = {
    new: true,
    runValidators: true
  }
  const doc = await pokeModel.findOneAndUpdate(selection, update, options)
  if (doc) {
    res.json({
      msg: "Updated Successfully",
      pokeInfo: doc
    })
  } else {
    // res.json({  msg: "Not found" })
    throw new PokemonNotFoundError("");
  }
  // } catch (err) { res.json(handleErr(err)) }
}))



app.use(handleErr)
