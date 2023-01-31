const students = [
  {
    id: 1,
    name: "Rubeus Hagrid",
    house: "Gryffindor",
    houseImg: ""
  },
  {
    id: 2,
    name: "Thomas Riddle",
    house: "Slytherin",
    houseImg: ""
  },
  {
    id: 3,
    name: "Myrtle Warren",
    house: "Ravenclaw",
    houseImg: ""
  },
  {
    id: 4,
    name: "Layla Hauser",
    house: "Hufflepuff",
    houseImg: ""
  },
  {
    id: 5,
    name: "Noxx Wingwright",
    house: "Ravenclaw",
    houseImg: ""
  }
];
//creating the server connection and card styling
const app = document.querySelector(".app");

const cardsOnDom = (students) => {
  let domString = `<div class="container">`;
  for (const student of students) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.houseImg}" class="card-img-top" alt="${student.house}">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
    </div>
    <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
  </div>`;
  };
  domString += `</div>`
  app.innerHTML = domString;
}
cardsOnDom(students);

//creating the filtering buttons
const filter = (arrayOfStudents, house) => {
  const houseArray = [];
  for (const student of arrayOfStudents) {
    if (student.house === house) {
      houseArray.push(student);
    }
  }
  return houseArray;
}

const allButton = document.querySelector("#show-all");
const greenButton = document.querySelector("#show-green");
const blueButton = document.querySelector("#show-blue");
const redButton = document.querySelector("#show-red");
const yellowButton = document.querySelector("#show-yellow");

allButton.addEventListener("click", () => {
  cardsOnDom(students);
});
greenButton.addEventListener("click", () => {
  const greenFilter = filter(students, "Slytherin");
  cardsOnDom(greenFilter)
});
blueButton.addEventListener("click", () => {
  const blueFilter = filter(students, "Ravenclaw");
  cardsOnDom(blueFilter)
});
redButton.addEventListener("click", () => {
  const redFilter = filter(students, "Gryffindor");
  cardsOnDom(redFilter)
});
yellowButton.addEventListener("click", () => {
  const yellowFilter = filter(students, "Hufflepuff");
  cardsOnDom(yellowFilter)
});

//creating a "new student" button with input
function randomHouse(max) {
  return Math.floor(Math.random() * max);
} 
if (randomHouse(4) === 0){
  return "Slytherin"
} else if (randomHouse(4) === 1){
  return "Ravenclaw"
} else if(randomHouse(4) === 2){
  return "Gryffindor"
} else if(randomHouse(4) === 3){
  return "Hufflepuff"
};
