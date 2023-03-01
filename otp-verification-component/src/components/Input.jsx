import { useState, useRef, useEffect } from "react";

export default function Input({
  active,
  index,
  setActive,
  inputsAmount,
  setResult,
}) {
  const [input, setInput] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      return;
    }
    setInput(value);
    setResult((prev) => {
      return prev + `${value}`;
    });
    if (value.length === 1 && active < inputsAmount - 1) {
      setActive(active + 1);
    }
  };

  const checkDelete = (e) => {
    const value = e.target.value;
    if (e.keyCode === 8 && active !== 0) {
      setResult((prev) => prev.slice(0, -1));
      if (value.length === 0) {
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
      value={input}
      onChange={(e) => handleChange(e)}
      onKeyDown={(e) => checkDelete(e)}
      className={`${active === index ? "active-input" : ""}`}
      type="number"
    />
  );
}
