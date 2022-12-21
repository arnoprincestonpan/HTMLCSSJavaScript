import React from 'react'

function Pokemon(probs) {
    console.log(probs);
    const { x } = probs
    const base = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/"
    var url = 0
    if (x.id < 10) {
        url = base + "00" + x.id + ".png"
    } else if (x.id < 100) {
        url = base + "0" + x.id + ".png"
    } else {
        url = base + x.id + ".png"
    }

    // show details in an alert function
    function showDetails(number) {
        alert("Name: " + number.name + "\n" + "Type: " + number.type + "\n" + "Base: " + number.base)
    }

    return (
        <div class="display-pokemon">
            <div class="display-pokemon-left">
                <p>Pokemon Id: {x.id}</p>
                <p>Pokemon name is {x.name.english}</p>
            </div>
            <div class="display-pokemon-right">
                <img class="display-pokemon-image" src={url} alt="pokemon image"></img>
                <details>
                    <summary>Click to see more details</summary>
                    <p>
                        Health Points: {x.base.HP}
                    <br />
                        Attack: {x.base.Attack}
                    <br />
                        Defense: {x.base.Defense}
                    <br />
                        Speed: {x.base.Speed}
                    <br />
                        Special Attack: {x.base["Sp. Attack"]}
                    <br />
                        Special Defense: {x.base["Sp. Defense"]}
                    </p>
                    {
                        x.type.map(type => {
                            return <p>Pokemon type is {type}</p>
                        })
                    }
                </details>
            </div>
        </div>
    )
}

export default Pokemon