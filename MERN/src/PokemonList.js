import { Types } from 'mongoose'
import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function PokemonList() {
    const [pokemon, setPokemon] = React.useState([])
    const [page, setPage] = React.useState(10)
    const [pageCount, setPageCount] = React.useState(1)
    const [filteredResults, setFilteredResults] = React.useState([])
    const [searchTerm, setSearchTerm] = React.useState("")

    const [typeValue, setTypeValue] = React.useState("")

    const types = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
            })
            .catch(err => console.log(err))
    }, [])

    const pokePage = paginate(pokemon, page, pageCount) // 10 pokemon per page
    const numberOfPages = Math.ceil(pokemon.length / page)

    const searchItems = (searchValue) => {
        setSearchTerm(searchValue)
        if (searchTerm !== "") {
            var filteredResults = pokemon.filter((pokemon) => {
                return pokemon.name.english.toLowerCase().includes(searchTerm.toLowerCase())
            })
            filteredResults = paginate(filteredResults, page, pageCount)
            setFilteredResults(filteredResults)
        } else {
            setFilteredResults(pokePage)
        }
    }

    return (
        <>
            <div>
                <form>
                    <input type="text" placeholder="Search" onChange={event => searchItems(event.target.value)} />
                </form>

                {/* <form>
                    {
                        types.map((type) => {
                            return (
                                <span key={type}>
                                    <input type="checkbox" id={type} name="type" value={type} onChange={event => searchItems(event.target.value)} />
                                    <label htmlFor={type}>{type}</label>
                                </span>
                            )
                        })
                    }
                </form> */}

                {/* <label for="pokemon-types">
                    Choose a type:
                    <select name="pokemon-types" id="pokemon-types" onchange={event => searchItems(event.target.value)}>
                        {
                            types.map((type) => {
                                return (
                                    <option value={type}>{type}</option>
                                )
                            })
                        }
                    </select>
                </label> */}

                {/* <form>
                    <input type="range" min="1" max="100" value="50" class="slider" id="myHP" />
                    <label for="myHP">HP</label>
                    <input type="range" min="1" max="100" value="50" class="slider" id="mySP" />
                    <label for="mySP">SP</label>
                </form> */}

            </div>
            <div class="grid-container">
            {
                searchTerm.length > 1 ?
                    filteredResults.map(pokeElement => {
                        return <div><Pokemon x={pokeElement} /> </div>
                    })
                    :
                    pokePage.map(pokeElement => {
                        return <div><Pokemon x={pokeElement} /> </div>
                    })
            },
            </div>
            <div class="display-buttons">
                {
                    pageCount > 1 ? <button onClick={() => setPageCount(pageCount - 1)}>Previous</button> : null
                }
                {
                    Array.from(Array(numberOfPages), (e, i) => {
                        if (i + 1 === pageCount) {
                            return <button class="active" onClick={() => setPageCount(i + 1)}>{i + 1}</button>
                        } else {
                            return <button onClick={() => setPageCount(i + 1)}>{i + 1}</button>
                        }
                    })
                }
                {
                    pageCount < numberOfPages ? <button onClick={() => setPageCount(pageCount + 1)}>Next</button> : null
                }
            </div>
        </>
    )
}


// divide pokemon into pages
function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export default PokemonList