import React, {useContext, useEffect} from "react";
import { PokemonContext } from "../PokemonContext";

function GenderButtons(){
    
    const {pokemonGender, setPokemonGender, setPokemonRender, pokemonInfo} = useContext(PokemonContext);

    useEffect(() => {
        //Search pokemon gender each time pokemon name is changed
        SearchPokemonGender(pokemonInfo)
        }, [pokemonInfo.name]);

    //fetch pokemon gender
    async function SearchPokemonGender(pokemonInfo){
        await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonInfo.name}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            setPokemonGender(data.gender_rate)
        })
        .catch(function (error) {
            console.log("ERROR: pokemon gender not found. " + error.status)
        })
    }

    return(
        <div className="white-squares-container">
            {
                pokemonGender === 0 ||  (pokemonGender < 8 && pokemonGender > 0 )
                    ? <div className="white-square" onClick={() => {setPokemonRender("front_default")}} > <i className="fa-solid fa-mars"></i> </div>
                    : <div className="white-square"></div> 
            }
            {
                pokemonGender < 8 && pokemonGender > 0 
                    ? <div className="white-square" onClick={() => {setPokemonRender("front_female")}}><i className="fa-solid fa-venus"></i></div>
                : pokemonGender === 8 
                    ? <div className="white-square"><i className="fa-solid fa-venus"></i></div>
                : <div className="white-square"></div>
            }
        </div>
    )
}

export default GenderButtons;