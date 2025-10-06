function SelectPercentage({ children, tip, onSetTip }) {
  return (
    <div>
      <label>{children}</label>{" "}
      <select
        value={tip}
        onChange={(event) => onSetTip(Number(event.target.value))}
      >
        <option value="0.00">Dissatisfied (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.15">It was pretty great (15%)</option>
        <option value="0.2">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage;
