import React, { useState } from "react";
import MiniAvatarSidebar from "./MiniAvatarSidebar";
import EditModal from "./EditModal";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../reducers/pokeReducer";
import AddPokemonButton from "./AddPokemonButton";
import CreateModal from "./CreateModal";

const Sidebar = () => {
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const dispatch = useDispatch();

  const showPokeModal = (poke) => {
    setPokemon(poke);
    setEditModal(true);
  };

  const removePokemon = () => {
    dispatch(remove(pokemon.id));
    setEditModal(false);
  };

  return (
    <div className="sidebar">
      {pokemons.map((poke, index) => {
        return (
          <MiniAvatarSidebar
            pokemon={poke}
            showModal={showPokeModal}
            key={index}
          />
        );
      })}
      <AddPokemonButton showModal={() => setCreateModal(true)} />
      <Modal show={editModal} dismiss={() => setEditModal(false)}>
        <EditModal pokemon={pokemon} removePokemon={removePokemon} />
      </Modal>
      <Modal show={createModal} dismiss={() => setCreateModal(false)}>
        <CreateModal dismiss={() => setCreateModal(false)} />
      </Modal>
    </div>
  );
};

export default Sidebar;
