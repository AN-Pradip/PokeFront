import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function GreenScreen(){
    const {pokemonName} = useContext(PokemonContext)
    return(
        <div className="GreenScreen">
            <span id="name-screen">{pokemonName}</span>
        </div>
    )
}

export default GreenScreen;