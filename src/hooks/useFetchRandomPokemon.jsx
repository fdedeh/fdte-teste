import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://pokeapi.co/api/v2/pokemon/";

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useFetchRandomPokemon = () => {
  const [dataState, setDataState] = useState({ data: [], isFetching: false });

  const fetchDataFromApi = async () => {
    try {
      setDataState({ ...dataState, isFetching: true });
      const response = await axios.get(API + randomInteger(1, 807));
      const {
        base_experience,
        forms,
        game_indices,
        held_items,
        is_default,
        location_area_encounters,
        moves,
        past_types,
        species,
        ...rest
      } = response.data;
      setDataState({
        ...dataState,
        data: rest,
        isFetching: false,
      });
    } catch (e) {
      console.log(e);
      setDataState({ ...dataState, isFetching: false });
    }
  };

  return [dataState, fetchDataFromApi];
};

export default useFetchRandomPokemon;
