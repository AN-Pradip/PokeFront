import React, { useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function MainScreen(){
    const {pokemonInfo} = useContext(PokemonContext)
    const {pokemonRender} = useContext(PokemonContext)

    return(
        <div>
            <div className="screen">
                <div className="screen-container">
                    {
                    pokemonInfo.sprites && pokemonRender === "front_default" 
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_default})`}}> </div> 
                    : pokemonInfo.sprites && pokemonRender === "front_female" 
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_female})`}}> </div> 
                    : <div className="screen-main-error"></div>
                    }
                </div>          
            </div>
        </div>
    )
}

export default MainScreen;