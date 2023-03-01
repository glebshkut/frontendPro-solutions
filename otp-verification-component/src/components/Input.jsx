import { useRef, useEffect } from "react";

export default function Input({
  active,
  index,
  setActive,
  inputsAmount,
  otpValues,
  setOTPValues,
}) {
  const ref = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      return;
    }
    setOTPValues((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1, value);
      return newArr;
    });
    if (value.length === 1 && active < inputsAmount - 1) {
      setActive(active + 1);
    }
  };

  const handleInputPaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text");

    if (pasteData.length !== inputsAmount) {
      return;
    }

    const newValues = pasteData.split("").slice(0, inputsAmount);
    setOTPValues(newValues);
    setActive(inputsAmount - 1);
  };

  const checkDelete = (e) => {
    if (e.keyCode === 8 && active !== 0) {
      const value = e.target.value;
      setOTPValues((prev) => prev.slice(0, -1));
      if (value.length === 0 && active !== 0) {
        setActive(active - 1);
      }
    }
  };

  useEffect(() => {
    if (active === index) {
      ref.current.focus();
    }
  }, [active, index]);

  return (
    <input
      ref={ref}
      value={otpValues[index]}
      onChange={(e) => handleChange(e)}
      onKeyDown={(e) => checkDelete(e)}
      onClick={() => {
        setActive(index);
      }}
      onPaste={handleInputPaste}
      className={active === index && "active-input"}
      type="text"
    />
  );
}
