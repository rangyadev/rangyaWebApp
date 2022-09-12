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
}, 12000);

//Enable Search Bar
let searchButton = document.querySelector("#searchButton");
let searchBar = document.querySelector(".searchBar");
let header = document.querySelector("header");
let closeSearchBar = document.querySelector("#closeSearchButton");

//Default Hidden Seach Bar
searchBar.classList.remove("searchBar");
searchBar.classList.add("searchBarHidden");

//Show Search Bar and Hide Header
searchButton.addEventListener("click", () => {
  header.classList.add("headerHidden");
  searchBar.classList.add("searchBar");
  searchBar.classList.remove("searchBarHidden");
});

//Close Search Bar and Show Header
closeSearchBar.addEventListener("click", () => {
  header.classList.remove("headerHidden");
  searchBar.classList.remove("searchBar");
  searchBar.classList.add("searchBarHidden");
});

//Number of Cards
let numberOfCards = 3;
let newReleasingCollectionIndex = 0,
  releasingSoonCollectionIndex = 0,
  limitedSizesCollectionIndex = 0,
  discountedRangyaPayCollectionIndex = 0;

//Releases Cards
let newReleases = document.querySelector("#newReleases");
let releasingSoons = document.querySelector("#releasingSoon");
let newReleasesCollection = [
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 20000,
  },
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 20000,
  },
];
let releasingSoonCollection = [
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 20000,
  },
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 20000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 20000,
  },
];
//Create New Releases
for (let i = 0; i < numberOfCards; i++) {
  if (typeof newReleasesCollection[i] == "undefined") continue;
  newReleasingCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("ReleasesCard");
  newReleases.appendChild(card);
  //Add Info to the Cards
  let cardImage = document.createElement("img");
  let cardInfo = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardDesc = document.createElement("p");
  let cardLink = document.createElement("a");
  //Adds Text via the Objects
  cardImage.setAttribute(
    "src",
    newReleasesCollection[newReleasingCollectionIndex].image
  );
  cardInfo.classList.add("releasesCardInfo");
  cardTitle.textContent =
    newReleasesCollection[newReleasingCollectionIndex].title;
  cardDesc.textContent =
    newReleasesCollection[newReleasingCollectionIndex].desc;
  cardLink.setAttribute("href", "");
  cardLink.style.backgroundColor = "#06e666";
  cardLink.textContent = `₱${newReleasesCollection[newReleasingCollectionIndex].price}`;
  //Appends the divs and image
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  //Appends the info inside the div
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardDesc);
  cardInfo.appendChild(cardLink);
}

//Add Arrow to the Right Side for New Releases
//Create Arrow
let nextNewReleases = document.createElement("i");
//Create Arrow Container
let arrowContainerNR = document.createElement("div");
//Add Classess
arrowContainerNR.classList.add("arrows");
nextNewReleases.classList.add("bi");
nextNewReleases.classList.add("bi-caret-right");
nextNewReleases.setAttribute("id", "nextNewReleases");

newReleases.appendChild(arrowContainerNR);
arrowContainerNR.appendChild(nextNewReleases);

//Create Releasing Soon
for (let i = 0; i < numberOfCards; i++) {
  if (typeof releasingSoonCollection[i] == "undefined") continue;
  releasingSoonCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("ReleasesCard");
  releasingSoons.appendChild(card);
  //Add Info to the Cards
  let cardImage = document.createElement("img");
  let cardInfo = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardDesc = document.createElement("p");
  let cardLink = document.createElement("a");
  //Adds Text via the Objects
  cardImage.setAttribute(
    "src",
    releasingSoonCollection[releasingSoonCollectionIndex].image
  );
  cardInfo.classList.add("releasesCardInfo");
  cardTitle.textContent =
    releasingSoonCollection[releasingSoonCollectionIndex].title;
  cardDesc.textContent =
    releasingSoonCollection[releasingSoonCollectionIndex].desc;
  cardLink.setAttribute("href", "");
  cardLink.style.backgroundColor = "#808080";
  cardLink.textContent = `Releasing in 10H:08M:08S`;
  //Appends the divs and image
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  //Appends the info inside the div
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardDesc);
  cardInfo.appendChild(cardLink);
}

//Add Arrow to the Right Side for New Releases
//Create Arrow
let nextReleasingSoon = document.createElement("i");
let arrowContainerRS = document.createElement("div");
//Add Classess
arrowContainerRS.classList.add("arrows");
nextReleasingSoon.classList.add("bi");
nextReleasingSoon.classList.add("bi-caret-right");
nextReleasingSoon.setAttribute("id", "nextReleasingSoon");

releasingSoons.appendChild(arrowContainerRS);
arrowContainerRS.appendChild(nextReleasingSoon);

// //Limited Sizes and Discount Cards
let limitedSizes = document.querySelector("#limitedSizes");
let discountedRangyaPays = document.querySelector("#discountedRangyaPay");
let limitedSizesCollection = [
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 30000,
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 30000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
];
let discountedRangyaPayCollection = [
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 30000,
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 30000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 30000,
  },
];

//Create Limited Sizes
for (let i = 0; i < numberOfCards; i++) {
  if (typeof limitedSizesCollection[i] == "undefined") continue;
  limitedSizesCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("sizesDiscountsCard");
  limitedSizes.appendChild(card);
  //Add Info to the Cards
  let cardImage = document.createElement("img");
  let cardInfo = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardDesc = document.createElement("p");
  let cardLink = document.createElement("a");
  //Adds Text via the Objects
  cardImage.setAttribute(
    "src",
    limitedSizesCollection[limitedSizesCollectionIndex].image
  );
  cardInfo.classList.add("sizesDiscountsCardInfo");
  cardTitle.textContent =
    limitedSizesCollection[limitedSizesCollectionIndex].title;
  cardDesc.textContent =
    limitedSizesCollection[limitedSizesCollectionIndex].desc;
  cardLink.setAttribute("href", "");
  cardLink.style.backgroundColor = "#06e666";
  cardLink.textContent = `₱${limitedSizesCollection[limitedSizesCollectionIndex].price}`;
  //Appends the divs and image
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  //Appends the info inside the div
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardDesc);
  cardInfo.appendChild(cardLink);
}

//Add Arrow to the Right Side for Limited Sizes
//Create Arrow
let nextLimitedSizes = document.createElement("i");
let arrowContainerLS = document.createElement("div");
//Add Classess
arrowContainerLS.classList.add("arrows");
nextLimitedSizes.classList.add("bi");
nextLimitedSizes.classList.add("bi-caret-right");
nextLimitedSizes.setAttribute("id", "nextReleasingSoon");

limitedSizes.appendChild(arrowContainerLS);
arrowContainerLS.appendChild(nextLimitedSizes);

//Create Discounted with Rangya Pay
for (let i = 0; i < numberOfCards; i++) {
  if (typeof discountedRangyaPayCollection[i] == "undefined") continue;
  discountedRangyaPayCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("sizesDiscountsCard");
  discountedRangyaPays.appendChild(card);
  //Add Info to the Cards
  let cardImage = document.createElement("img");
  let cardInfo = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardDesc = document.createElement("p");
  let cardLink = document.createElement("a");
  //Adds Text via the Objects
  cardImage.setAttribute(
    "src",
    discountedRangyaPayCollection[discountedRangyaPayCollectionIndex].image
  );
  cardInfo.classList.add("sizesDiscountsCardInfo");
  cardTitle.textContent =
    discountedRangyaPayCollection[discountedRangyaPayCollectionIndex].title;
  cardDesc.textContent =
    discountedRangyaPayCollection[discountedRangyaPayCollectionIndex].desc;
  cardLink.setAttribute("href", "");
  cardLink.style.backgroundColor = "#06e666";
  cardLink.textContent = `₱${discountedRangyaPayCollection[discountedRangyaPayCollectionIndex].price}`;
  //Appends the divs and image
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  //Appends the info inside the div
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardDesc);
  cardInfo.appendChild(cardLink);
}

//Add Arrow to the Right Side for Limited Sizes
//Create Arrow
let nextDiscountedRangyaPay = document.createElement("i");
let arrowContainerDRP = document.createElement("div");
//Add Classess
arrowContainerDRP.classList.add("arrows");
nextDiscountedRangyaPay.classList.add("bi");
nextDiscountedRangyaPay.classList.add("bi-caret-right");
nextDiscountedRangyaPay.setAttribute("id", "nextReleasingSoon");

discountedRangyaPays.appendChild(arrowContainerDRP);
arrowContainerDRP.appendChild(nextDiscountedRangyaPay);

// //Change Collection Index
//New Releasing
nextNewReleases.addEventListener("click", () => {
  let card = document
    .getElementById("newReleases")
    .querySelectorAll(".ReleasesCard");
  for (let i = 0; i < newReleasesCollection.length; i++) {
    card[i]
      .querySelector("img")
      .setAttribute(
        "src",
        newReleasesCollection[newReleasingCollectionIndex + 1].image
      );
    card[i].querySelector("h2").textContent =
      newReleasesCollection[newReleasingCollectionIndex + 1].title;
    card[i].querySelector("p").textContent =
      newReleasesCollection[newReleasingCollectionIndex + 1].desc;
    card[i].querySelector("a").setAttribute("href", "");
    card[i].querySelector(
      "a"
    ).textContent = `₱${newReleasesCollection[newReleasingCollectionIndex].price}`;
  }
});
