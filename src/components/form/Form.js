import React from "react";
import "./form.scss";
import Input from "../input/Input";

const Form = () => {
  return (
    <div className="input-container">
      <span className="input">
        <Input />
      </span>
      <span className="input">
        <Input />
      </span>
      <span className="input">
        <Input />
      </span>
      <span className="input">
        <Input />
      </span>
      <span className="input">
        <Input />
      </span>
    </div>
  );
};

export default Form;
