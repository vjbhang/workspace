function greet(person, date) {
  console.log(
    "Hello " + person.toUpperCase() + ", today is " + date.toDateString() + "!"
  );
}
function getFavoriteNumber() {
  return 26;
}
greet("Maddison", new Date());
console.log(getFavoriteNumber());
