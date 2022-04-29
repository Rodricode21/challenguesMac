const airline = "tap air portugal";
console.log(airline);
console.log(airline.slice(0, airline.indexOf(" ")));

const checkmiddleSeat = function (seat) {
  const s = seat.slice(-1);

  if (s === "b" || s === "e") console.log("you have a middle seat");
};

checkmiddleSeat("11b");

// const passenger = "jOnAS".split("");
// // console.log(passenger);
// // const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

const email = "o.rserrano@hotmail.com";

const loginEmail = " O.RSERRANO@HOTMAil.com \n";
const lower = loginEmail.toLowerCase();
const trimmedEmail = lower.trim();

console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const capitalized = function (passenger) {
  return `${passenger[0].toUpperCase()}${passenger.slice(1).toLowerCase()} `;
};

// shorter version with arrow function
const capitalizeFirstLetter = (name) =>
  `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;

console.log(capitalized("oSCAR"));
console.log(capitalizeFirstLetter("hECTOR"));
