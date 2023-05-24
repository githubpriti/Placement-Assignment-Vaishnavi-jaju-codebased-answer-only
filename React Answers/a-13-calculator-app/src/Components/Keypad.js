import React from "react";

const Keypad = ({handleClick, handleClear, handleEqual }) => {
    return(
        <div className="keypad">
            <button className="digit-key"
            onClick={() =>  handleClick("7")}>7
            </button>
            <button className="digit-key"
            onClick={() =>  handleClick("8")}>8
            </button>
            <button className="digit-key"
            onClick={() =>  handleClick("9")}>9
            </button>
            <button className="operator-key"
            onClick={() =>  handleClick("/")}>/
            </button>
            <br />
            <button className="digit-key"
            onClick={() =>  handleClick("4")}>4
            </button>
            <button className="digit-key"
            onClick={() =>  handleClick("5")}>5
            </button>
            <button className="digit-key"
            onClick={() =>  handleClick("6")}>6
            </button>
            <button className="operator-key"
            onClick={() =>  handleClick("*")}>*
            </button>
            <br/>
            <button className="digit-key"
            onClick={() =>  handleClick("1")}>1
            </button>
            <button className="digit-key"
            onClick={() =>  handleClick("2")}>2
            </button>
            <button className="digit-key"
            onClick={() =>  handleClick("3")}>3
            </button>
            <button className="operator-key"
            onClick={() =>  handleClick("-")}>-
            </button>
            <br/>
            <button className="digit-key bottom-left-corner"
            onClick={() =>  handleClick("0")}>0
            </button>
            <button className="fun-key"
            onClick={handleEqual}>=
            </button>
            <button className="fun-key"
            onClick={handleClear}>C
            </button>
            <button className="digit-key bottom-right-corner"
            onClick={() =>  handleClick("+")}>+
            </button>
        </div>
    );
};

export default Keypad;