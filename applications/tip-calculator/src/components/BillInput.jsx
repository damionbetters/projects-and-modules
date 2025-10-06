function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>{" "}
      <input
        type="text"
        placeholder="0"
        value={bill}
        onChange={(event) => onSetBill(event.target.value)}
      />
    </div>
  );
}

export default BillInput;
