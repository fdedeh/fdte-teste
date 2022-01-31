import React, { useEffect } from "react";

const Button = ({ text, icon, onClick, ...props }) => {
  return (
    <button
      className={`btn btn--${text ? "text" : "icon"}`}
      onClick={onClick}
      {...props}
    >
      {text || icon}
    </button>
  );
};

export default Button;
