import React, { useEffect, useState, useRef }from "react";
import LeftPanel from "./layout/leftPanel";
import RightPanel from "./layout/rightpanel";
import {PokemonContext} from "./PokemonContext"

function App() {
  const [pokemonName, setPokemonName] = useState("pikachu");
  //const [pokemonID, setPokemonID] = useState()
  const [pokemonSprites, setPokemonSprites] = useState(false)

  const pokemonNameRef = useRef(undefined);
  useEffect(() => {
    //Search each time pokemonName is changed
    SearchPokemon(pokemonName)
    }, [pokemonName]);

  //prevent refresh & set searched pokemon name to lower case
  function handleSubmit(event){
    event.preventDefault();
    setPokemonName(pokemonNameRef.current.value.toLowerCase())
  }

  async function SearchPokemon(pokemonName){
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      method: "GET"
    })
    .then(response => response.json())
    .then((data) => {
      setPokemonSprites(data.sprites);
      //setPokemonID(data.id);
      setPokemonName(data.name)
    })
    .catch(function (error) {
        console.log("ERROR: pokemon not found " + error.status)
        setPokemonSprites(false);
        setPokemonName("Error!")
    })
  }

  return (
    <PokemonContext.Provider value={{pokemonName, pokemonSprites}}>
      <div id="pokedexWrapper">
        <form onSubmit={handleSubmit}>
          <input type="text" id="SearchBox" placeholder="Type a pokemon name or id" ref={pokemonNameRef}/>
        </form>
        <LeftPanel/>
        <RightPanel />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
