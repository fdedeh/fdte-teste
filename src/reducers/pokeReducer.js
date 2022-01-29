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
    remove: (state) => {
      state.value -= 1;
    },
    get: (state) => {
      return state.pokemons.length;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, decrement, incrementByAmount } = pokeReducer.actions;

export default pokeReducer.reducer;
