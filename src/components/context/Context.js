import React, { useState } from "react";
// import Form from "../../components/form/Form";

export const inputContext = React.createContext();

const Context = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  // const handleOTP = () => {};
  const changeHandler = (e, index) => {
    if (isNaN(e.target.value)) {
      return false;
    }
    console.log(e.target.value, index);
    setOtp([...otp.map((itm, idx) => (idx === index ? e.target.value : itm))]);

    if (e.target.nextSibling && e.target.value !== "") {
      e.target.nextSibling.focus();
    }

    // console.log(e.nativeEvent.data);
    // console.log(e.target.value);
    // setOtp(...otp,otp[e.target.key] = e.target.value)
    // let temp = ["", "", "", ""];
    // temp = otp.map((item, index) =>
    // index === e.target.key ? e.target.value : item
    // console.log(e.target.key, index)
    // );
    // setOtp([...temp]);
    // setOtp([
    //   ...otp.map((item, index) =>
    //     index === e.target.key ? e.target.value : item
    //   ),
    // ]);
  };

  return (
    // <inputContext.Provider
    //   value={{
    //     handleOTP: handleOTP(),
    //     otp: otp,
    //     setOtp: () => setOtp(),
    //     changeHandler: (e) => {
    //       changeHandler(e);
    //     },
    //   }}
    // >
    //   <Form />
    // </inputContext.Provider>
    <>
      {otp.map((item, index) => {
        return (
          <input
            className="input"
            key={index}
            value={item}
            type="text"
            maxLength={1}
            onChange={(e) => changeHandler(e, index)}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
    </>
  );
};

export default Context;
