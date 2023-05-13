import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function GreenScreen(){
    const {pokemonInfo} = useContext(PokemonContext)
    
    return(
    <div className="descScreen-container">
        <div id="about-screen" className="descScreen">
            {pokemonInfo.height && pokemonInfo.weight ? "Height:" + pokemonInfo.height + "cm\nWeigth:" + pokemonInfo.weight+ "kg" : "nothing"}
        </div>
    </div>
    )
}

export default GreenScreen;