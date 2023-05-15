import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function ShinyButton(){
    const {shiny} =useContext(PokemonContext)
    const {setShiny} =useContext(PokemonContext)

    return(
        <div className="yellow-button yellow" onClick={() => {setShiny(!shiny)}}>
            <div className="big-dot light-yellow"></div>
        </div>   
    )
}

export default ShinyButton;