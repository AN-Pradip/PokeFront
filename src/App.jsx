import React, { useEffect, useState, useRef }from "react";

import LeftPanel from "./layout/leftPanel";
import RightPanel from "./layout/rightpanel";


function App() {

  const pokemonNameRef = useRef(undefined);
  const [pokemonName, setpokemonName] = useState("notAPokemon");
  useEffect(() => {
    //Search each time pokemonName is changed
    SearchPokemon(pokemonName)
  });

  function handleSubmit(event){
    event.preventDefault();
    setpokemonName(pokemonNameRef.current.value)
  }
  async function SearchPokemon(pokemonName){
    console.log(pokemonName)
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      method: "GET"
    })
    .then(response => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
        console.log("ERROR: pokemon not found " + error.status)
    })
  }

  return (
    <div id="pokedexWrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" id="SearchBox" placeholder="Type a pokemon name" ref={pokemonNameRef}/>
      </form>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
