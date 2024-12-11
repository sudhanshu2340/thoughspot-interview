import "./App.css";
import usePokemon from "./hooks/usePokemon";
import { Pokemon } from "./components/Pokemon";
import React from "react";

function App() {
  const { loading, pokemons, error } = usePokemon();
  return (
    <div className="App">
      {loading ? (
        <div>Loading Result</div>
      ) : (
        <React.Fragment>
          {error ? (
            <div>{error}</div>
          ) : (
            <React.Fragment>
              {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
              ))}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
