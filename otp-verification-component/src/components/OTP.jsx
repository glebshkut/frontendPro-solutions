import { useState, useRef } from "react";
import Input from "./Input";

const randomCode = (amount) => {
  let code = "";
  for (let i = 0; i < amount; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};

export default function OTP() {
  const inputsAmount = 4;
  const answer = useRef(randomCode(inputsAmount));

  const [active, setActive] = useState(0);
  const [otpValues, setOTPValues] = useState(new Array(inputsAmount).fill(""));

  const inputsArray = () => {
    const arr = [];
    for (let i = 0; i < inputsAmount; i++) {
      arr.push(
        <Input
          index={i}
          active={active}
          setActive={setActive}
          inputsAmount={inputsAmount}
          otpValues={otpValues}
          setOTPValues={setOTPValues}
        />
      );
    }
    return arr;
  };

  return (
    <div className="otp">
      {answer.current.length === otpValues.length &&
      otpValues.join("") === answer.current ? (
        <div id="verified-div">
          <div id="verified-text">Your email is verified!</div>
          <button id="reload-button" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      ) : (
        <div>
          <p id="answer">Code: {answer.current}</p>
          <p className="main-text">Verify your email address</p>
          <div className="inputs">{inputsArray()}</div>
        </div>
      )}
    </div>
  );
}
