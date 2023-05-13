import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function MainScreen(){
    const {pokemonInfo} = useContext(PokemonContext)
    return(
        <div>
            <div className="screen">
                <div className="screen-container">
                    {pokemonInfo.sprites ?
                    <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_default})`}}> </div>
                    : <div className="screen-main-error" ></div>}
                </div>          
            </div>
        </div>
    )
}

export default MainScreen;