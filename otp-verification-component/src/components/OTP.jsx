import { useState } from "react";
import Input from "./Input";

export default function OTP() {
  const inputsAmount = 4;
  const answer = "1187";
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
      {answer.length === otpValues.length && otpValues.join("") === answer ? (
        <div id="verified-text">Your email is verified!</div>
      ) : (
        <div>
          <p id="answer">Code: {answer}</p>
          <p className="main-text">Verify your email address</p>
          <div className="inputs">{inputsArray()}</div>
        </div>
      )}
    </div>
  );
}
