import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function MainScreen(){
    const {pokemonSprites} = useContext(PokemonContext)
    return(
        <div>
            <div className="screen">
                <div className="screen-container">
                    {pokemonSprites ?
                    <div className="screen-main" style={{backgroundImage: `url(${pokemonSprites.front_default})`}}> </div>
                    : <div className="screen-main-error" ></div>}
                </div>          
            </div>
        </div>
    )
}

export default MainScreen;