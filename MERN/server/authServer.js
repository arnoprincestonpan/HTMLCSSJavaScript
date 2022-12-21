const express = require("express")
const { handleErr } = require("./errorHandler.js")
const { asyncWrapper } = require("./asyncWrapper.js")
const dotenv = require("dotenv")
dotenv.config();
const userModel = require("./userModel.js")
const { connectDB } = require("./connectDB.js")

const cors = require("cors")

const {
  PokemonBadRequest,
  PokemonDbError,
  PokemonAuthError
} = require("./errors.js")

const app = express()
app.use(cors())

const start = asyncWrapper(async () => {
  await connectDB({ "drop": false });


  app.listen(process.env.authServerPORT, async (err) => {
    if (err)
      throw new PokemonDbError(err)
    else
      console.log(`Phew! Server is running on port: ${process.env.authServerPORT}`);
    const doc = await userModel.findOne({ "username": "admin" })
    const user = await userModel.findOne({ "username": "user" })
    if (!doc)
      userModel.create({ username: "admin", password: bcrypt.hashSync("admin", 10), role: "admin", email: "admin@admin.ca" })
    if (!user)
      userModel.create({ username: "user", password: bcrypt.hashSync("user", 10), role: "user", email: "user@user.ca" })
  })
})
start()

app.use(express.json())


const bcrypt = require("bcrypt")
app.post('/register', asyncWrapper(async (req, res) => {
  const { username, password, email } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const userWithHashedPassword = { ...req.body, password: hashedPassword }

  const user = await userModel.create(userWithHashedPassword)
  res.send(user)
}))

const jwt = require("jsonwebtoken")
app.post('/login', asyncWrapper(async (req, res) => {
  const { username, password } = req.body
  const user = await userModel.findOne({ username })
  if (!user) {
    throw new PokemonAuthError("User not found")
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) {
    throw new PokemonAuthError("Password is incorrect")
  }

  if (!user.token) {
    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    await userModel.updateOne({ username }, { token })
    res.header('auth-token', token)
  } else {
    res.header('auth-token', user.token)
  }
  const updatedUser = await userModel.findOneAndUpdate({ username }, { "token_invalid": false })

  res.send(updatedUser)
}))


app.get('/logout', asyncWrapper(async (req, res) => {
  const { username, password } = req.body
  const user = await userModel.findOne({ username })
  // const user = await userModel.findOne({ token: req.query.appid })
  // const user = await userModel.findOne({ username: req.query.username })
  if (!user) {
    throw new PokemonAuthError("User not found")
  }
  // await userModel.updateOne({ token: null }, { token_invalid: true })
  var updatedUser = await userModel.findOneAndUpdate({ username }, { "token_invalid": true })
  updatedUser = await userModel.findOneAndUpdate({ username }, { "token": null })
  // sessionStorage.getItem("token")
  // sessionStorage.setItem("token", null)
  res.send("Logged out")
}))

app.get('/logout/special', asyncWrapper(async (req, res) => {
  const { token } = req.query.appid
  // const user = await userModel.findOne({ token: req.query.appid })
  // const user = await userModel.findOne({ username: req.query.username })
  if (!token) {
    throw new PokemonAuthError("User not found")
  }
  // await userModel.updateOne({ token: null }, { token_invalid: true })
  var updatedUser = await userModel.findOneAndUpdate({ username }, { "token_invalid": true })
  updatedUser = await userModel.findOneAndUpdate({ username }, { "token": null })
  // sessionStorage.getItem("token")
  // sessionStorage.setItem("token", null)
  res.send("Logged out")
}))





app.use(handleErr)
