import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "../reducers/pokeReducer";

const store = configureStore({
  reducer: {
    pokedex: pokeReducer,
  },
});

export default store;
