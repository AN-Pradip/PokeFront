import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function MainScreen(props){
    const {pokemonSprites} = useContext(PokemonContext)
    return(
        <div>
            {pokemonSprites ?
            <div className="screen-container">
                <div className="screen">
                    <img src={pokemonSprites.front_default} alt="pokemonImage" />
                </div>          
            </div>
            : <div> nothing </div>}
        </div>
    )
}

export default MainScreen;