function greet(person: string, date: Date) {
  console.log(
    `Hello ${person.toUpperCase()}, today is ${date.toDateString()}!`
  );
}

function getFavoriteNumber(): number {
  return 26;
}

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is" + pt.x);
  console.log("The coordinate's y value is" + pt.y);
}

greet("Maddison", new Date());
console.log(getFavoriteNumber());
printCoord({ x: 3, y: 7 });
