import React, { useEffect, useState, useRef }from "react";
import LeftPanel from "./layout/leftPanel";
import RightPanel from "./layout/rightpanel";
import {PokemonContext} from "./PokemonContext"

function App() {
  const [pokemonInfo, setPokemonInfo] = useState({name: "pikachu",id: 25})
  const [pokemonGender, setPokemonGender] = useState(4)

  const pokemonNameRef = useRef(undefined);
  useEffect(() => {
    //Search each time pokemon name is changed
    SearchPokemon(pokemonInfo)
    SearchPokemonGender(pokemonInfo)
    }, [pokemonInfo.name]);

  //prevent refresh & set searched pokemon name to lower case
  function handleSubmit(event){
    event.preventDefault();
    setPokemonInfo({name: pokemonNameRef.current.value.toLowerCase()})
  }

  //fetch pokemon Info
  async function SearchPokemon(pokemonInfo){
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo.name}`, {
      method: "GET"
    })
    .then(response => response.json())
    .then((data) => {
      let copyOfPokemonInfo = {name: data.name, sprites: data.sprites,id: data.id, height: data.height, weight: data.weight};
      setPokemonInfo(copyOfPokemonInfo)
    })
    .catch(function (error) {
        console.log("ERROR: pokemon not found " + error.status)
    })
  }

  //fetch pokemon gender
  async function SearchPokemonGender(pokemonInfo){
    console.log(pokemonInfo)
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonInfo.name}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then((data) => {
        //console.log(data.gender_rate)
        setPokemonGender(data.gender_rate)
        //console.log(pokemonGender)
    })
    .catch(function (error) {
        console.log("ERROR: pokemon gender not found. " + error.status)
    })
}

  return (
    <PokemonContext.Provider value={{pokemonInfo, setPokemonInfo, setPokemonGender, pokemonGender}}>
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
