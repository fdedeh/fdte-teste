import React, { useState } from "react";
import Button from "./Button";
import plusIcon from "../assets/images/plus.png";
import MiniAvatarSidebar from "./MiniAvatarSidebar";
import EditModal from "./EditModal";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../reducers/pokeReducer";

const Sidebar = () => {
  const [editModal, setEditModal] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const dispatch = useDispatch();

  const showModal = (poke) => {
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
          <MiniAvatarSidebar pokemon={poke} showModal={showModal} key={index} />
        );
      })}
      <Button
        icon={<img src={plusIcon} alt="+" disabled={pokemons.lenght > 5} />}
      />
      <Modal show={editModal} dismiss={() => setEditModal(false)}>
        <EditModal pokemon={pokemon} removePokemon={removePokemon} />
      </Modal>
    </div>
  );
};

export default Sidebar;
