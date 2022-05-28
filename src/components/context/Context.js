import React, { useState } from "react";
import Form from "../../components/form/Form";

export const context = React.createContext();

const Context = () => {
  return (
    <context.Provider>
      <Form />
    </context.Provider>
  );
};

export default Context;
