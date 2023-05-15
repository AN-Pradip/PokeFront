import React, { useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function MainScreen(){
    const {pokemonInfo, pokemonRender, shiny} = useContext(PokemonContext)

    return(
        <div>
            <div className="screen">
                <div className="screen-container">
                    {
                    //Display front_default
                    pokemonInfo.sprites && pokemonRender === "front_default" && !shiny
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_default})`}}> </div> 
                    //Display front_female
                    : pokemonInfo.sprites && pokemonRender === "front_female" && pokemonInfo.sprites.front_female != null && !shiny
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_female})`}}> </div> 
                    //Display front_default if gender female but no url
                    : pokemonInfo.sprites && pokemonRender === "front_female" && pokemonInfo.sprites.front_female === null && !shiny
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_default})`}}> </div> 
                    //Display front_shiny_female
                    : pokemonInfo.sprites && pokemonRender === "front_female" && pokemonInfo.sprites.front_shiny_female != null && shiny 
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_shiny_female})`}}> </div> 
                    //Display front_shiny
                    : pokemonInfo.sprites && pokemonRender === "front_default" && shiny 
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_shiny})`}}> </div> 
                    //Display front_shiny if gender female but no url
                    : pokemonInfo.sprites && shiny && pokemonInfo.sprites.front_shiny_female === null
                        ? <div className="screen-main" style={{backgroundImage: `url(${pokemonInfo.sprites.front_shiny})`}}> </div>
                    //Else display error
                    : <div className="screen-main"> </div> 
                    }
                </div>          
            </div>
        </div>
    )
}

export default MainScreen;