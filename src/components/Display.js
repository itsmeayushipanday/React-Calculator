import React from "react";
import "./styles/Display.css";

const Display = (props) => {
  const changeHandler = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      props.setInputValue(e.target.value);
    }
  };

  return (
    <>
      <div className="display">
        {props.answer === "" ? (
          <>
            <input
              type="text"
              placeholder="0"
              name="input"
              style={{ padding: "29px" }}
              className="input"
              value={props.inputValue}
              maxLength={12}
              autoComplete="off"
              onChange={changeHandler}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="0"
              name="input"
              style={{ padding: "29px" }}
              value={props.inputValue}
              maxLength={12}
              disabled
              className="value"
            />
            <input
              type="text"
              name="value"
              value={props.answer}
              disabled
              className="input"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
