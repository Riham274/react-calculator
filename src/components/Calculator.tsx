import { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleNumberClick = (num: number) => {
    if (sign === "") {
      setNum1((prev) => ( prev + num.toString()));
    } else {
      setNum2((prev) => ( prev + num.toString()));
    }
  };

  const calculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let res: number;

    switch (sign) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;
      default:
        res = 0;
    }

    setResult(res.toString());
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setSign("");
    setResult("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-80">
        <div className="bg-black text-green-400 rounded-lg p-4 text-right text-2xl font-mono mb-4 h-16 flex items-center justify-end overflow-x-auto">
          {result !== ""
            ? result
            : `${num1} ${sign} ${num2}`}
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {numbers.slice(0, 9).map((num, index) => (
            <Button
              key={index}
              name={num.toString()}
              onClick={() => handleNumberClick(num)}
              color="bg-blue-500 hover:bg-blue-600"
            />
          ))}
          <Button
            name="0"
            onClick={() => handleNumberClick(0)}
            color="bg-blue-500 hover:bg-blue-600"
            extraClass="col-span-2"
          />
          <Button
            name="C"
            onClick={clear}
            color="bg-gray-500 hover:bg-gray-600"
          />
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          <Button
            name="+"
            onClick={() => setSign("+")}
            color="bg-green-500 hover:bg-green-600"
          />
          <Button
            name="-"
            onClick={() => setSign("-")}
            color="bg-green-500 hover:bg-green-600"
          />
          <Button
            name="*"
            onClick={() => setSign("*")}
            color="bg-green-500 hover:bg-green-600"
          />
          <Button
            name="/"
            onClick={() => setSign("/")}
            color="bg-green-500 hover:bg-green-600"
          />
        </div>
        <Button
          name="="
          onClick={calculate}
          color="bg-red-500 hover:bg-red-600 w-full py-3 text-xl"
        />
      </div>
    </div>
  );
}

export default Calculator;
