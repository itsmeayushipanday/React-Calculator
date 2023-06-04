import React from "react";
import "./styles/Button.css";

const Button = (props) => {
  const eventHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("equalto").click();
    }
  };
  document.addEventListener("keydown", eventHandler);

  return (
    <>
      <div className="show-btn">
        <button className="btn exp" onClick={props.inputHandler}>
          ^
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          (
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          )
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          √
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          x<sup>2</sup>
        </button>
        <button className="btn clr" onClick={props.clearHandler}>
          AC
        </button>
        <button className="btn clr" onClick={props.backSpaceHandler}>
          ⌫
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          log
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          ÷
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          %
        </button>
        <button className="btn" onClick={props.inputHandler}>
          7
        </button>
        <button className="btn" onClick={props.inputHandler}>
          8
        </button>
        <button className="btn" onClick={props.inputHandler}>
          9
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          x
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          x<sup>3</sup>
        </button>
        <button className="btn" onClick={props.inputHandler}>
          4
        </button>
        <button className="btn" onClick={props.inputHandler}>
          5
        </button>
        <button className="btn" onClick={props.inputHandler}>
          6
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          -
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          <sup>3</sup>√
        </button>
        <button className="btn" onClick={props.inputHandler}>
          1
        </button>
        <button className="btn" onClick={props.inputHandler}>
          2
        </button>
        <button className="btn" onClick={props.inputHandler}>
          3
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          +
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          !
        </button>
        <button className="btn exp" onClick={props.signChangeHandler}>
          ±
        </button>
        <button className="btn" onClick={props.inputHandler}>
          0
        </button>
        <button className="btn exp" onClick={props.inputHandler}>
          .
        </button>
        <button
          className="btn exp equal"
          id="equalto"
          onClick={props.calculateHandler}
        >
          =
        </button>
      </div>
    </>
  );
};

export default Button;
