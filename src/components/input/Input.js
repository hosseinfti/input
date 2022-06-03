import React, { useContext } from "react";
import { inputContext } from "../context/Context";
import "./input.scss";

const Input = (props) => {
  const context = useContext(inputContext);
  console.log(props.index);
  return (
    <input
      className="input"
      key={props.index}
      value={props.value}
      onChange={(e) => context.changeHandler(e, props.index)}
      type="text"
      maxLength={1}
    />
  );
};

export default Input;
