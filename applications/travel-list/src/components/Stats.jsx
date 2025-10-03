function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Let's start adding something! 👨🏾‍🎤</em>
      </p>
    );

  const numberOfItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const packedCompletionPercentage = Math.round(
    (numberOfPacked / numberOfItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedCompletionPercentage === 100
          ? "You have everything! Ready to go ✈️"
          : `💼 You have ${numberOfItems} items on your list, and you already packed ${numberOfPacked} item (${packedCompletionPercentage}%) 📈`}
      </em>
    </footer>
  );
}

export default Stats;
