import { useEffect, useState } from "react";

const usePokemon = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [pokemons, setPokenmons] = useState([]);
  useEffect(() => {
    const url = "https://pokeapi.co/api/32v2/pokemon?limit=1000&offset=0";
    fetch(url)
      .then(async (response) => {
        const json = await response.json();
        setPokenmons(json.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, []);
  return {
    pokemons,
    loading,
    error
  };
};
export default usePokemon;
