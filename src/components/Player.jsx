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

const Player = () => {
  const [hoverRef, isHovered] = useHover();
  const [captura, setCaptura] = useState(false);
  const [tooltip, setTooltip] = useState(searchTooltip);
  const [pokemon, setPokemon] = useState({});
  const [catchModal, setCatchModal] = useState(false);
  const [dataState, fetchDataFromApi] = useFetchRandomPokemon();

  useEffect(() => {
    if (captura) {
      setTooltip(searchingTooltip);
      fetchDataFromApi();
    } else {
      //checa qtde de pokemon pra setar tooltip padrão
      setTooltip(searchTooltip);
    }
  }, [captura]);

  useEffect(() => {
    if (!dataState.isFetching && captura) {
      setTimeout(() => {
        setPokemon(dataState.data);
        setCatchModal(true);
        setCaptura(false);
      }, 1400);
    }
  }, [dataState.isFetching]);

  return (
    <>
      <div className="player" onClick={() => setCaptura(true)} ref={hoverRef}>
        {(isHovered || captura) && <Tooltip tooltip={tooltip} />}
        {!captura && <div className="playerCharFront"></div>}
        {captura && <div className="playerCharRun"></div>}
      </div>
      <Modal show={catchModal} dismiss={() => setCatchModal(false)}>
        <CatchModal pokemon={pokemon} />
      </Modal>
    </>
  );
};

export default Player;
