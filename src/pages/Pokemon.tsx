import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Typography, Spin } from "antd";

type Pokemon = {
  name: string;
  weight: number;
  type: string;
};

export const Pokemon = () => {
  return (
    <>
      <Typography.Title className="text-center">Pokemon API</Typography.Title>
      <PokemonData />
    </>
  );
};

function PokemonData() {
  const {
    isLoading,
    error,
    data: pokemon,
  } = useQuery({
    queryKey: ["pikachuData"],
    queryFn: fetchPokemon,
  });

  if (isLoading) {
    return (
      <div className="flex-cc">
        <Spin size="large" />
      </div>
    );
  }

  if (error) return <div>Došlo je do greške prilikom dohvata pokemona!</div>;

  return (
    <section>
      <ul>
        <li>Name: {pokemon?.name}</li>
        <li>Weight: {pokemon?.weight}</li>
        <li>Type: {pokemon?.type}</li>
      </ul>
    </section>
  );
}

async function fetchPokemon() {
  const pokemon: Pokemon = { name: "", weight: -1, type: "" };
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    const { name, weight, types } = response.data;
    pokemon.name = name;
    pokemon.weight = weight;
    pokemon.type = types[0].type.name;
    return pokemon;
  } catch (error) {
    throw new Error(`Failed to fetch Pokemon | ${error}`);
  }
}
