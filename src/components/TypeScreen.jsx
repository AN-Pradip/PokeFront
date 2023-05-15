import React, { useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function TypeScreen(){
    const {pokemonInfo} = useContext(PokemonContext)

    return(
        <div className="bottom-screens-container">
          <div id="type-screen" className="right-panel-screen">
            <ul>
            {pokemonInfo.types != null 
                ? pokemonInfo.types.map((type) => { return (<li key={type.slot}> {type.type.name} </li>)})
                : "nothing"
            }
            </ul>
          </div>
        </div>
    )
}

export default TypeScreen;

/*
{types.map((type => 
`<li key=${type}> ${type} </li>`
))}
*/
/*
{pokemonInfo.types?.map((type) => {
                    <p key={type.slot}> {type} </p>
                })}
*/
/*
{pokemonInfo.types 
                ? 
                pokemonInfo.types?.map((type) => {
                    <p key={type.slot}> {type.type.name} </p>
                })
                : <div> no </div>
                }
*/