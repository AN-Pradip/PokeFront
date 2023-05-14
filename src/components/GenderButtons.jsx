import React, {useContext} from "react";
import { PokemonContext } from "../PokemonContext";

function GenderButtons(){
    
    const {pokemonGender} = useContext(PokemonContext);

    return(
        <div className="center-left-container">
            {(() => {
                switch (pokemonGender) {
                    case 0:
                        return (
                        <div className="white-squares-container">
                            <div className="white-square"><i className="fa-solid fa-mars"></i></div>
                            <div className="white-square"></div>
                          </div>
                        )
                    case 8:
                        return (
                        <div className="white-squares-container">
                            <div className="white-square"></div>
                            <div className="white-square"><i className="fa-solid fa-venus"></i></div>
                        </div>
                        )
                    case -1:
                        return (
                        <div className="white-squares-container">
                            <div className="white-square"></div>
                            <div className="white-square"></div>
                        </div>
                        )
                    default:
                        return (
                        <div className="white-squares-container">
                            <div className="white-square"><i className="fa-solid fa-mars"></i></div>
                            <div className="white-square"><i className="fa-solid fa-venus"></i></div>
                        </div>
                        )
                }
            })()}
        </div>
    )
}

export default GenderButtons;