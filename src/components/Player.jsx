import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import useHover from "../hooks/useHover";
import Tooltip from "./Tooltip";
import searchTooltip from "../assets/images/searchTooltip.png";
import searchingTooltip from "../assets/images/searchingTooltip.png";
import tooltipError from "../assets/images/tooltipError.png";
import useFetchRandomPokemon from "../hooks/useFetchRandomPokemon";
import Modal from "./Modal";
import CatchModal from "./CatchModal";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../reducers/pokeReducer";

const Player = () => {
  const [hoverRef, isHovered] = useHover();
  const [captura, setCaptura] = useState(false);
  const [tooltip, setTooltip] = useState(searchTooltip);
  const [pokemon, setPokemon] = useState({});
  const [catchModal, setCatchModal] = useState(false);
  const [dataState, fetchDataFromApi] = useFetchRandomPokemon();

  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (captura) {
      if (pokemons.length < 6) {
        setTooltip(searchingTooltip);
        fetchDataFromApi();
      } else {
        setTooltip(tooltipError);
      }
    } else {
      setTooltip(searchTooltip);
    }
  }, [captura]);

  useEffect(() => {
    if (!dataState.isFetching && captura) {
      setTimeout(() => {
        setPokemon(dataState.data);
        setCatchModal(true);
        setCaptura(false);
      }, 400);
    }
  }, [dataState.isFetching]);

  const catchPokemon = () => {
    dispatch(add(pokemon));
    setCatchModal(false);
    if (pokemons.length >= 5) {
      setCaptura(true);
    }
  };

  return (
    <>
      <div className="player" onClick={() => setCaptura(true)} ref={hoverRef}>
        {(isHovered || captura) && <Tooltip tooltip={tooltip} />}
        {(!captura || tooltip == tooltipError) && (
          <div className="playerCharFront"></div>
        )}
        {captura && tooltip !== tooltipError && (
          <div className="playerCharRun"></div>
        )}
      </div>
      <Modal show={catchModal} dismiss={() => setCatchModal(false)}>
        <CatchModal pokemon={pokemon} catchPokemon={catchPokemon} />
      </Modal>
    </>
  );
};

export default Player;
