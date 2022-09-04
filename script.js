//Main Page Components
let mainPageBackground = document.querySelector("#mainPageBackground");
let changePicBack = document.querySelector("#changePicBack");
let changePicNext = document.querySelector("#changePicNext");
//Change Slide Indicator Based on Current Slide
let slideIndicators = [];
let slideIndicatorsContainer = document.querySelector(".slideIndicators");
//Background Components
let mainPagePictureIndex = 0;
let mainPicBackgroundCollection = [
  "assets/homePageBackground/shoeAnnouncement_1.jpg",
  "assets/homePageBackground/shoeAnnouncement_2.jpg",
  "assets/homePageBackground/shoeAnnouncement_3.jpg",
  "assets/homePageBackground/shoeAnnouncement_4.jpg",
  "assets/homePageBackground/shoeAnnouncement_5.jpg",
];

//Create Slide Indicators
for (let i = 0; i < mainPicBackgroundCollection.length; i++) {
  let slideIndicator = document.createElement("div");
  slideIndicator.classList.add("slideIndicator");
  slideIndicatorsContainer.appendChild(slideIndicator);
  slideIndicators.push(slideIndicator);
}

//Set Background on Load
mainPageBackground.src = mainPicBackgroundCollection[mainPagePictureIndex];
slideIndicators[mainPagePictureIndex].style.backgroundColor = "white";

//Changes Picture When Arrow is Clicked
//Previous Picture
changePicBack.addEventListener("click", () => {
  if (mainPagePictureIndex > 0) {
    mainPagePictureIndex--;
  } else {
    mainPagePictureIndex = mainPicBackgroundCollection.length - 1;
  }
  changePicture();
});

//Next Picture
changePicNext.addEventListener("click", () => {
  if (mainPagePictureIndex < mainPicBackgroundCollection.length - 1) {
    mainPagePictureIndex++;
  } else {
    mainPagePictureIndex = 0;
  }
  changePicture();
});

function changePicture() {
  mainPageBackground.src = mainPicBackgroundCollection[mainPagePictureIndex];
  //Changes Slides When Changes Picture background
  slideIndicators[mainPagePictureIndex].style.backgroundColor = "white";
  for (let i = 0; i < mainPicBackgroundCollection.length; i++) {
    if (i === mainPagePictureIndex) continue;
    slideIndicators[i].style.backgroundColor = "";
  }
}

//
setInterval(function () {
  if (mainPagePictureIndex < mainPicBackgroundCollection.length - 1) {
    mainPagePictureIndex++;
  } else {
    mainPagePictureIndex = 0;
  }
  changePicture();
}, 60000);

//Enable Search Bar
let searchButton = document.querySelector("#searchButton");
let searchBar = document.querySelector(".searchBar");
let header = document.querySelector("header");

searchButton.addEventListener("click", () => {});
