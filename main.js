const askMail = prompt("inserisci qui la tua mail");

const mailAccettate = [
  "giorgio@gmail.com",
  "piero@gmail.com",
  "francesco@gmail.com",
  "genoveffa@gmail.com",
];

for (let i = 0; i < mailAccettate.length; i++) {
  if (askMail == mailAccettate[i]) {
    alert("benvenuto");
  }
}

// const number = prompt("inserisci un numero da 1 a 6");

// function computerNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var random = computerNumber(1, 6);
// console.log(random);

// if (number > random) {
//   alert("hai vinto");
// } else if (number == random) {
//   alert("pareggio");
// } else {
//   alert("hai perso");
// }
