import "./App.css";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import DisplayBill from "./components/DisplayBill";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState("");
  const [tip2, setTip2] = useState("");

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  const tip = Number(bill * Number(tip1) + Number(tip2)).toFixed(2);
  const total = (Number(bill) + Number(tip)).toFixed(2);

  return (
    <>
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={tip1} onSetTip={setTip1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tip={tip2} onSetTip={setTip2}>
        How did your party like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <DisplayBill bill={bill} total={total} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

export default App;
