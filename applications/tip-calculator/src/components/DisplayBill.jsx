function DisplayBill({ bill, tip, total }) {
  return (
    <div>
      <h2>{`Your Grand Total is $${total} ($${bill} bill  + $${tip} tip)`}</h2>
    </div>
  );
}

export default DisplayBill;
