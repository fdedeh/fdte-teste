import React from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/images/close.png";
import PokeBall from "./PokeBall";

const Modal = ({ show, dismiss, children }) => (
  <>
    {show && (
      <div className="modal">
        <div className="modal__content">
          <img
            className="modal__close"
            src={closeIcon}
            alt="Fechar"
            onClick={dismiss}
          />
          {children}
        </div>
      </div>
    )}
  </>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
