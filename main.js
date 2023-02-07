const students = [
  {
    id: 1,
    name: "Rubeus Hagrid",
    house: "Gryffindor",
    expelled: false,
    // color: colorAssign,
    img: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/05/legiao_sZd5IYXiqQ_pAMmwJ3frtyNEnHc1SOx0TekuCjB6G2.jpg.webp"
  },
  {
    id: 2,
    name: "Thomas Riddle",
    house: "Slytherin",
    expelled: false,
    // color: colorAssign,
    img: "https://s2.r29static.com/bin/entry/e97/348,0,1400,1050/x,80/1785123/image.jpg"
  },
  {
    id: 3,
    name: "Myrtle Warren",
    house: "Ravenclaw",
    expelled: false,
    // color: colorAssign,
    img: "https://wizardswelcome.com/wp-content/uploads/2022/04/mrytle.jpg"
  },
  {
    id: 4,
    name: "Layla Hauser",
    house: "Hufflepuff",
    expelled: false,
    // color: colorAssign,
    img: "https://thenichollsworth.com/wp-content/uploads/2020/11/Unknown.jpeg"
  },
  {
    id: 5,
    name: "Noxx Wingwright",
    house: "Ravenclaw",
    expelled: false,
    // color: colorAssign,
    img: "https://www.seekpng.com/png/detail/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png"
  }
];

const deathEaters = [
  {
    id: 1,
    name: "Jasper Baltz",
    expelled: true
  }
];

//creating the server connection and card styling
const app = document.querySelector(".student-containers");

const cardsOnDom = (students) => {
  let domString = `<div id="new-in">`;
    for (const student of students) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.img}" class="card-img-top" alt="${student.house}">
    <div class="card-body">
      <p class="card-text" style="font-family:'Snell Roundhand'">${student.name}</p>
    </div>
    <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
  </div>`;
  };
  domString += `</div>`
  app.innerHTML = domString;
}
cardsOnDom(students);

//expelled students
const expelledCardsOnDom = () => {
  let domStringExpelled = `<div id="expelled">`;
    for (const student of deathEaters) {
    domStringExpelled += `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-body2">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">has been expelled from Hogwarts School of Witchcraft and Wizardry.</p>
    </div>
  </div>`;
  };
  domStringExpelled += `</div>`
  app.innerHTML = domStringExpelled;
}
expelledCardsOnDom(deathEaters);

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

//hiding new student form
const showFloat = document.querySelector("#showForm");
const hideFloat = document.querySelector("#show");

showFloat.addEventListener("click", () => {
  console.log(showFloat);
  if (hideFloat.style.display === "none") {
    hideFloat.style.display = "block";
  }
});

//creating a "new student" button with input
const welcomeNewStudent = (event) => {
  event.preventDefault();
  
  function randomHouse(max) {
    return Math.floor(Math.random() * max);
  };
  function assignRandomHouse(){
    if (randomHouse(3) === 0){
      return "Slytherin";
    } else if (randomHouse(3) === 1){
      return "Ravenclaw";
    } else if(randomHouse(3) === 2){
      return "Gryffindor";
    } else {
     return "Hufflepuff";
  }}
  
  //color assignment
  colorAssign = students.forEach(() => {
   if (students.house === "Slytherin"){
     const green = `<p style="background-color: #185d09;"></p>`
     return green
   } else if(students.house === "Ravenclaw"){
     const blue = `<p style="background-color: #0852a0"></p>`
     return color = blue
   } else if(students.house === "Gryffindor"){
     const red = `<p style="background-color: #b41919"></p>`
     return color = red
   } else {
     const yellow = `<p style="background-color: #dbb509></p>`
     return color = yellow
 }});
  
  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: assignRandomHouse(),
    expelled: false,
    color: colorAssign
  };
  console.log("new student", newStudent);
  
  students.push(newStudent);

  cardsOnDom(students);
  document.querySelector("form").reset();
};
const newButton = document.querySelector("#form-submit");
newButton.addEventListener("click", welcomeNewStudent);

// (event) => {
//   const form = document.querySelectorAll('.needs-validation');
//   if (!form.checkValidity()) {
//     event.preventDefault()
//     event.stopPropagation()
//   } else {
//     welcomeNewStudent();
//   }
// });

// creating an EXPEL button
const appDiv = document.querySelector(".student-containers");

appDiv.addEventListener("click", (event) => {
  if (event.target.id.includes("expel")) {
    const [, studentId] = event.target.id.split("--");
    const studentIndex = students.findIndex((object) => object.id === Number(studentId));
    students[studentIndex].expelled = true;
    const expellTarget = students.splice(studentIndex, 1);
    deathEaters.push(...expellTarget);
  };
  cardsOnDom(students);
  expelledCardsOnDom(deathEaters);
  console.log(students);
  console.log(deathEaters);
});

const darkButton = document.querySelector("#show-dark");
darkButton.addEventListener("click", () => {
  expelledCardsOnDom();
});

const startApp = () => {
  cardsOnDom(students);
};

startApp();
