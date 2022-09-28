import React from "react";
import "./button.css"


// If an operator is not equal to a number or . or =, then it should display a different colour defined in the isOperator styling
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};


const Button = props => (
    <div
    className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
);

 export default Button;