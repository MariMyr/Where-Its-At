function generateRandomSeat(quantity) {
  const sections = ["A", "B", "C", "D", "E"];
  const randomIndex = Math.floor(Math.random() * sections.length);
  const section = sections[randomIndex];
  const startSeat = Math.floor(Math.random() * (300 - quantity)) + 1;
  const seats = Array.from({ length: quantity }, (_, i) => startSeat + i);
  return { section, seats };
}

export default generateRandomSeat;
