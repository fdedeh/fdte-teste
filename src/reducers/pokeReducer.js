import { createSlice } from "@reduxjs/toolkit";

export const pokeReducer = createSlice({
  name: "pokedex",
  initialState: {
    pokemons: [],
  },
  reducers: {
    add: (state, pokemon) => {
      state.pokemons.push(pokemon.payload);
    },
    remove: (state, id) => {
      state.pokemons.map((poke, index) => {
        if (poke.id == id.payload) state.pokemons.splice(index, 1);
      });
    },
    get: (state) => {
      return state.pokemons.length;
    },
  },
});

export const { add, remove, get } = pokeReducer.actions;

export default pokeReducer.reducer;
