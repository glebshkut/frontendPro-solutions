import { useState } from "react";
import Input from "./Input";

export default function OTP() {
  const inputsAmount = 4;
  const answer = "3578";
  const [active, setActive] = useState(0);
  const [result, setResult] = useState("");

  const inputsArray = () => {
    const arr = [];
    for (let i = 0; i < inputsAmount; i++) {
      arr.push(
        <Input
          index={i}
          active={active}
          setActive={setActive}
          inputsAmount={inputsAmount}
          setResult={setResult}
        />
      );
    }
    return arr;
  };

  return (
    <div className="otp">
      {result === answer ? (
        <div id="verified-text">Your email is verified!</div>
      ) : (
        <div>
          <p className="main-text">Verify your email address</p>
          <div className="inputs">{inputsArray()}</div>
        </div>
      )}
    </div>
  );
}
