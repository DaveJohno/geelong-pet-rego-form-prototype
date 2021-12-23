//get ul class names to append list the pet breed list in quetion three
const appendDogBreedList = document.getElementById("dogBreedList");
const appendCatBreedList = document.getElementById("catBreedList");

function catTextSpan() {
  document.querySelector(".breed-list").innerHTML = "Cat";
  document.querySelector(".pet-name-text-span").innerHTML = "Cat";
  document.querySelector(".pet-birthday-text-span").innerHTML = "Cat";
  document.querySelector(".pet-sex-text-span").innerHTML = "Cat";
}

function dogTextSpan() {
  document.querySelector(".breed-list").innerHTML = "Dog";
  document.querySelector(".pet-name-text-span").innerHTML = "Dog";
  document.querySelector(".pet-birthday-text-span").innerHTML = "Dog";
  document.querySelector(".pet-sex-text-span").innerHTML = "Dog";
}

//show/hide the other type text field
const petOtherTextField = document.getElementById("petOtherFeild");
const radioPetBtn = document.querySelectorAll(`.radio-pet`);
console.log(radioPetBtn);

function hidePetOther() {
  if (otherPetText.ariaExpanded === "true") {
    otherPetText.click();
  }
}

function showPetOther() {
  if (otherPetText.ariaExpanded === "false") {
    otherPetText.click();
  }
}

//find the pet type text feild
let otherPetText = document.getElementById(`otherAnimal`);

const radioPetOther = document
  .getElementById("radioPetOther")
  .addEventListener(`click`, showPetOther);
const radioPet = document
  .querySelector(`.radio-pet`)
  .addEventListener(`click`, hidePetOther);
const radioPetTwo = document
  .querySelector(`.radio-pet-two`)
  .addEventListener(`click`, hidePetOther);
const radioPetThree = document
  .querySelector(`.radio-pet-three`)
  .addEventListener(`click`, hidePetOther);

//get and make first question radio buttons are checked
const petTypeCat = document.getElementById("catRadio");
const petTypeDog = document.getElementById("dogRadio");

petTypeCat.addEventListener(`click`, function () {
  petTypeCat.checked === true;
  petTypeDog.checked === false;
  questionOneNextBntAcivate();
  appendCatBreedList.classList.remove("hidden");
  appendDogBreedList.classList.add("hidden");
  catTextSpan();
});

petTypeDog.addEventListener(`click`, function () {
  petTypeCat.checked === false;
  petTypeDog.checked === true;
  questionOneNextBntAcivate();
  appendDogBreedList.classList.remove("hidden");
  appendCatBreedList.classList.add("hidden");
  dogTextSpan();
});

//activate question one button
const questionOneNextBntAcivate = function () {
  document.getElementById(`questionOneNextBtn`).classList.remove(`greyed-out`);
};

//get the first question next button and add click event
const nextBtnOne = document
  .querySelector(".next-btn-one")
  .addEventListener(`click`, function () {
    document.getElementById(`questionOneBtn`).click();
    document.getElementById(`questionTwoBtn`).click();
    document.getElementById(`cardTwo`).classList.remove(`greyed-out`);
    document.getElementById(`cardOne`).classList.add(`greyed-fifty`);
  });

//Question two
//get the name, birthday, sex fields fields and next buuton
const petName = document.getElementById(`petName`);
let petBirthday = document.getElementById(`petBirthday`);
const petMale = document.getElementById(`petSexMale`);
const petFemale = document.getElementById(`petSexFemale`);
const questionTwoNextBtn = document.getElementById("questionTwoNextBtn");

//check if there is a value in the name field
const nameCheck = petName.addEventListener(`change`, function () {
  petName.value.length;
  questionTwoNextBtnActivate();
});

//check if there is a pet birthdate
const petBirthCheck = petBirthday.value == "date_value";
console.log(petBirthCheck);

//change the checked values on the pet sex field
petMale.addEventListener(`click`, function () {
  petMale.checked === true;
  petFemale.checked === false;
  questionTwoNextBtnActivate();
  console.log(`change pet male to ` + petMale.checked);
});

petFemale.addEventListener(`click`, function () {
  petMale.checked === false;
  petFemale.checked === true;
  questionTwoNextBtnActivate();
});

//activate the question two next button
const questionTwoNextBtnActivate = function () {
  if (petMale.checked === true || petFemale.checked === true) {
    if (petName.value.length > 1) {
      questionTwoNextBtn.classList.remove(`greyed-out`);
    }
  }
};

console.log(`pet male ` + petMale.checked);
//get the second question next button and add click event
const nextBtnTwo = document
  .querySelector(".next-btn-two")
  .addEventListener(`click`, function () {
    document.getElementById(`questionThreeBtn`).click();
    document.getElementById(`questionTwoBtn`).click();
    document.getElementById(`cardThree`).classList.remove(`greyed-out`);
    document.getElementById(`cardTwo`).classList.add(`greyed-fifty`);
  });

//question three - pet breeds
//dog breed list array
let dogBreedList = [
  "Affenpinscher",
  "Afghan Hound",
  "Ainu",
  "Airedale Terrier",
  "Akita",
  "Alaskan Husky",
  "Alaskan Klee Kai",
  "Alaskan Malamute",
  "American Bulldog",
];

//cat breed list arraqy
let catBreedList = [
  "American Shorthair",
  "Abyssinian",
  "American Curl",
  "American Bobtail",
  "American Wirehair",
  "Aegean",
  "Australian Mist",
  "American Polydactyl",
];

//append doog breed array into li
dogBreedList.forEach(function (dog) {
  let li = document.createElement("li");
  let text = document.createTextNode(dog);
  li.appendChild(text);
  appendDogBreedList.appendChild(li);
});

//append cat breed array into li
catBreedList.forEach(function (cat) {
  let li = document.createElement("li");
  let text = document.createTextNode(cat);
  li.appendChild(text);
  appendCatBreedList.appendChild(li);
});

//get the breed name and change inner html of the ul
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

//get the cat breed name
const selectCatUl = document.getElementById("catBreedList");
selectCatUl.onclick = function (event) {
  let target = event.target;
  console.log(event.target.innerHTML);
  document.getElementById("pleaseSelectPetTextBntText").innerHTML =
    event.target.innerHTML;
  document.getElementById("petColourDropdown").classList.remove("greyed-out");
};

//get the dog breed name
const selectDogUl = document.getElementById("dogBreedList");
selectDogUl.onclick = function (event) {
  let target = event.target;
  console.log(event.target.innerHTML);
  document.getElementById("pleaseSelectPetTextBntText").innerHTML =
    event.target.innerHTML;
  document.getElementById("petColourDropdown").classList.remove("greyed-out");
};

//append Pet Colour List
const appendPetColourList = document.getElementById("petColorList");

//pet colour list arraqy
let petColourList = [
  "Apricot",
  "Apricot/Black",
  "Apricot/Cleam",
  "Beige",
  "Beige/Black",
  "Beige/Cream",
  "Beige/Tan",
  "Black/Cream",
  "Black/Fawn",
  "Black/Gold",
  "Black/Ginger",
];

//append pet colour array into li
petColourList.forEach(function (colour) {
  let li = document.createElement("li");
  let text = document.createTextNode(colour);
  li.appendChild(text);
  appendPetColourList.appendChild(li);
});

//get the Pet Colour name
const selectPetColourUl = document.getElementById("petColorList");
selectPetColourUl.onclick = function (event) {
  console.log(event.target.value);
  let target = event.target;
  console.log(event.target.value);
  console.log(event.target.innerHTML);
  document.getElementById("pleaseSelectPetColourTextBntText").innerHTML =
    event.target.innerHTML;
  console.log(event.target.value);
  document
    .getElementById("questionThreeNextBtn")
    .classList.remove("greyed-out");
};

//get the third question next button and add click event
const nextBtnThree = document
  .querySelector(".next-btn-three")
  .addEventListener(`click`, function () {
    document.getElementById(`questionThreeBtn`).click();
    document.getElementById(`questionFourBtn`).click();
    document.getElementById(`cardFour`).classList.remove(`greyed-out`);
    document.getElementById(`cardThree`).classList.add(`greyed-fifty`);
  });

//question 4 - pet exemptions
//desexed questions
const desexedRadioYes = document
  .getElementById("desexedYes")
  .addEventListener(`click`, hideIsPetUsedForBreeding);
const desexedRadioNo = document
  .getElementById("desexedNo")
  .addEventListener(`click`, showIsPetUsedForBreeding);

function showIsPetUsedForBreeding() {
  if (document.getElementById("usedForBreeding").ariaExpanded === "false") {
    document.getElementById("usedForBreeding").click();
  }
}
function hideIsPetUsedForBreeding() {
  if (document.getElementById("usedForBreeding").ariaExpanded === "true") {
    document.getElementById("usedForBreeding").click();
  }
}

//breeding Questions
const breedingRadioYes = document.getElementById("showBreedingAlert");
const breedingRadioNo = document.getElementById("hideBreedingAlert");
let breedingAlertToggle = document.getElementById("breedingAlert");

const clickbreedingRadioYes = breedingRadioYes.addEventListener(
  `click`,
  showBreedingAlert
);
const clickbreedingRadioNo = breedingRadioNo.addEventListener(
  `click`,
  hideBreedingAlert
);

function showBreedingAlert() {
  if (breedingAlertToggle.ariaExpanded === "false") {
    breedingAlertToggle.click();
    console.log(`333`);
    breedingRadioNo;
  }
}
function hideBreedingAlert() {
  if (breedingAlertToggle.ariaExpanded === "true") {
    breedingAlertToggle.click();
    console.log(`444`);
  }
}

// //date picker
// // Data Picker Initialization
// $(".datepicker").datepicker();

//microshiped Radio Buttons
const microchippedYes = document
  .getElementById("microYes")
  .addEventListener(`click`, activateCustomerDetailsBtn);
const microchippedNo = document
  .getElementById("microNo")
  .addEventListener(`click`, activateCustomerDetailsBtn);
const nextPageCustomerDetailsBtn = document.querySelector(".next-page-btn");

function activateCustomerDetailsBtn() {
  nextPageCustomerDetailsBtn.classList.remove("greyed-out");
}
