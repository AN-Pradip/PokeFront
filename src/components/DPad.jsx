import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function Dpad(){
    //const setPokemonName = useContext(PokemonContext);
    const {pokemonID} = useContext(PokemonContext);
    const {setPokemonName} = useContext(PokemonContext);

    return(
        <div className="Dpad">
            <div className="Dpad-top" onClick={() => setPokemonName(pokemonID+1)}></div>
            <div className="Dpad-left"></div>
            <div className="Dpad-center">
                <span className="dot"></span>
            </div>
            <div className="Dpad-right"></div>
            <div className="Dpad-bottom" onClick={() => setPokemonName(pokemonID-1)} ></div>
        </div>
    )
}

export default Dpad;