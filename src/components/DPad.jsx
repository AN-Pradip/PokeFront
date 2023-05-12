import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function Dpad(){
    const {pokemonName} = useContext(PokemonContext)
    return(
        <div className="Dpad">
            <div className="Dpad-top"></div>
            <div className="Dpad-left"></div>
            <div className="Dpad-center">
                <span class="dot"></span>
            </div>
            <div className="Dpad-right"></div>
            <div className="Dpad-bottom"></div>
        </div>
    )
}

export default Dpad;