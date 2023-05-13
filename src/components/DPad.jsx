import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function Dpad(){
    const {pokemonInfo} = useContext(PokemonContext);
    const {setPokemonInfo} = useContext(PokemonContext);

    return(
        <div className="Dpad">
            <div className="Dpad-top" onClick={() => setPokemonInfo({name: pokemonInfo.id+1})}></div>
            <div className="Dpad-left"></div>
            <div className="Dpad-center">
                <span className="dot"></span>
            </div>
            <div className="Dpad-right"></div>
            <div className="Dpad-bottom" onClick={() => setPokemonInfo({name: pokemonInfo.id-1})} ></div>
        </div>
    )
}

export default Dpad;