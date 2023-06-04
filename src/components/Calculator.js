import React, { useState } from "react";
import { evaluate, round } from "mathjs";
import Display from "./Display";
import Button from "./Button";
import "./styles/Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");

  const inputHandler = (event) => {
    if (answer === "Invalid Input") return;
    let val = event.target.innerText;

    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    let str = inputValue + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInputValue(answer + val);
      setAnswer("");
    } else setInputValue(str);
  };

  const clearHandler = () => {
    setInputValue("");
    setAnswer("");
  };

  const backSpaceHandler = () => {
    if (answer !== "") {
      setInputValue(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInputValue((prev) => prev.slice(0, -1));
  };

  const signChangeHandler = () => {
    if (answer === "Invalid Input") return;
    //sirf input ho
    else if (answer === "") {
      //start me -
      if (inputValue.charAt(0) === "-") {
        const sign = "+";
        setInputValue((prevValue) =>
          sign.concat(inputValue.slice(1, prevValue.length))
        );
      }
      //start me +
      else if (inputValue.charAt(0) === "+") {
        const sign = "-";
        setInputValue((prevValue) =>
          sign.concat(inputValue.slice(1, prevValue.length))
        );
      }
      //nothing in start
      else {
        const sign = "-";
        setInputValue(sign.concat(inputValue));
      }
    } else if (answer !== "") {
      //start me -
      if (answer.charAt(0) === "-") {
        const sign = "+";
        setInputValue(sign.concat(answer.slice(1, answer.length)));
      }
      //start me +
      else if (answer.charAt(0) === "+") {
        const sign = "-";
        setInputValue(sign.concat(answer.slice(1, answer.length)));
      }
      //nothing in start
      const sign = "-";
      setInputValue(sign.concat(answer));
    }
  };

  const isBracketBalanced = (exp) => {
    let stack = [];
    for (let i = 0; i < exp.length; i++) {
      let x = exp[i];
      if (x === "(") {
        stack.push(x);
        continue;
      } else if (x === ")") {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    return stack.length === 0;
  };

  const calculateHandler = () => {
    if (inputValue === "") return;
    let result = 0;
    let finalexpression = inputValue;

    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");
    // evaluate square root
    let noSqrt = inputValue.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = inputValue;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }

    try {
      if (!isBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }

      result = evaluate(finalexpression);
    } catch (error) {
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!"; //error.message
    }

    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <Display
            inputValue={inputValue}
            answer={answer}
            setInputValue={setInputValue}
          />
          <Button
            inputHandler={inputHandler}
            clearHandler={clearHandler}
            backSpaceHandler={backSpaceHandler}
            signChangeHandler={signChangeHandler}
            calculateHandler={calculateHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
