import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function GreenScreen(){
    const {pokemonInfo} = useContext(PokemonContext)
    return(
        <div className="GreenScreen">
            <span id="name-screen">{pokemonInfo.name}</span>
        </div>
    )
}

export default GreenScreen;