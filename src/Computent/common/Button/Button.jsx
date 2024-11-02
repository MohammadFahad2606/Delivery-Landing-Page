import React from "react";
import "./Button.css";
const Button = ({ istrue, text }) => {
  return (
    <div>
      <button>
        {istrue && <img src="./assets/images/react.svg" />}
        {text}
      </button>
    </div>
  );
};

export default Button;
