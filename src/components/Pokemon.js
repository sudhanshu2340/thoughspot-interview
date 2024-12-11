export const Pokemon = ({ pokemon }) => {
  return <div>
    <a href={pokemon.url} target="_blank" rel="noreferrer">{pokemon.name}</a>
  </div>;
};
