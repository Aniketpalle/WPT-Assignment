import React, { useState } from "react";

// Child Component
const ChildComponent = ({ onOperationChange }) => {
  return (
    <div>
      <h3>Select Operation</h3>
      <select onChange={(e) => onOperationChange(e.target.value)}>
        <option value="">--Select--</option>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleOperationChange = (operation) => {
    let res;

    const n1 = Number(num1);
    const n2 = Number(num2);

    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = "";
    }

    setResult(res);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <br /><br />

      <ChildComponent onOperationChange={handleOperationChange} />

      <h3>Result: {result}</h3>
    </div>
  );
};

export default ParentComponent;