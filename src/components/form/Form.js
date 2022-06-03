import React, { useContext } from "react";
import "./form.scss";
import Input from "../input/Input";
import { inputContext } from "../context/Context";

const Form = () => {
  const context = useContext(inputContext);
  return (
    <div className="input-container">
      {context.otp.map((item, index) => {
        return (
          // <span key={index} className="input">
            <Input value={item} index={index} />
          // </span>
        );
      })}

      {/* <span className="input">
        <Input index="0" />
      </span>
      <span className="input">
        <Input index="1" />
      </span>
      <span className="input">
        <Input index="2" />
      </span>
      <span className="input">
        <Input index="3" />
      </span> */}
    </div>
  );
};

export default Form;
