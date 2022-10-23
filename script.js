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
}, 6000);
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
    days: new Date("09/22/2022"),
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 20000,
    days: new Date("11/30/2022"),
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 20000,
    days: new Date("01/30/2023"),
  },
  {
    image: "assets/shoeItems/paranoise_1.jpg",
    title: "ParaNoise 2.0",
    desc: "G-Dragon x Nike",
    price: 20000,
    days: new Date("12/30/2022"),
  },
  {
    image: "assets/shoeItems/kwondo_1.jpeg",
    title: "KWONDO 1",
    desc: "Peaceminusone x Nike",
    price: 20000,
    days: new Date("10/30/2022"),
  },
  {
    image: "assets/shoeItems/DunkPanda_1.jpg",
    title: "Dunk Low Panda",
    desc: "Nike Dunk Low Retro",
    price: 20000,
    days: new Date("10/30/2022"),
  },
];

//Create New Releases Cards
for (let i = 0; i < newReleasesCollection.length; i++) {
  if (typeof newReleasesCollection[i] == "undefined") continue;
  newReleasingCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("Card");
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
  cardInfo.classList.add("CardInfo");
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

//Create Releasing Soon
for (let i = 0; i < releasingSoonCollection.length; i++) {
  if (typeof releasingSoonCollection[i] == "undefined") continue;
  releasingSoonCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("Card");
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
  cardInfo.classList.add("CardInfo");
  cardTitle.textContent =
    releasingSoonCollection[releasingSoonCollectionIndex].title;
  cardDesc.textContent =
    releasingSoonCollection[releasingSoonCollectionIndex].desc;
  cardLink.setAttribute("href", "");
  cardLink.style.backgroundColor = "#808080";
  let currentDate = new Date();
  let currentTime = currentDate.getTime();
  let releaseDate =
    releasingSoonCollection[releasingSoonCollectionIndex].days.getTime();
  let remainingDays = releaseDate - currentTime;
  let remainingTime = Math.round(remainingDays / (1000 * 3600 * 24));
  if (remainingTime === 1) {
    cardLink.textContent = `Releasing in ${remainingTime} Day`;
  } else if (remainingTime <= 0) {
    cardLink.textContent = `₱${releasingSoonCollection[releasingSoonCollectionIndex].price}`;
  } else {
    cardLink.textContent = `Releasing in ${remainingTime} Days`;
  }
  //Appends the divs and image
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  //Appends the info inside the div
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardDesc);
  cardInfo.appendChild(cardLink);
}

//Limited Sizes and Discount Cards
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
for (let i = 0; i < limitedSizesCollection.length; i++) {
  if (typeof limitedSizesCollection[i] == "undefined") continue;
  limitedSizesCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("Card");
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
  cardInfo.classList.add("CardInfo");
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

//Create Discounted with Rangya Pay
for (let i = 0; i < limitedSizesCollection.length; i++) {
  if (typeof discountedRangyaPayCollection[i] == "undefined") continue;
  discountedRangyaPayCollectionIndex = i;
  //Creates Cards
  let card = document.createElement("div");
  card.classList.add("Card");
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
  cardInfo.classList.add("CardInfo");
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

//Scrolling Cards
let scrollAmount = 1000;
//Scrolling Left to Right New Releases
document.querySelector("#backNewReleases").addEventListener("mouseup", () => {
  document
    .querySelector("#newRelease")
    .scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
document.querySelector("#nextNewReleases").addEventListener("mouseup", () => {
  document
    .querySelector("#newRelease")
    .scrollBy({ left: scrollAmount, behavior: "smooth" });
});
//Scrolling Left to Right Releasing soon
document.querySelector("#backReleasingSoon").addEventListener("mouseup", () => {
  document
    .querySelector("#releasingsoon")
    .scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
document.querySelector("#nextReleasingSoon").addEventListener("mouseup", () => {
  document
    .querySelector("#releasingsoon")
    .scrollBy({ left: scrollAmount, behavior: "smooth" });
});
//Scrolling Left to Right Limiting Size
document.querySelector("#backLimitedSizes").addEventListener("mouseup", () => {
  document
    .querySelector("#limitedSize")
    .scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
document.querySelector("#nextLimitedSizes").addEventListener("mouseup", () => {
  document
    .querySelector("#limitedSize")
    .scrollBy({ left: scrollAmount, behavior: "smooth" });
});
//Scrolling Left to Right Discounted
document
  .querySelector("#backDiscountedRangyaPay")
  .addEventListener("mouseup", () => {
    document
      .querySelector("#discountedRangyaPays")
      .scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
document
  .querySelector("#nextDiscountedRangyaPay")
  .addEventListener("mouseup", () => {
    document
      .querySelector("#discountedRangyaPays")
      .scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

//Change Shoe Viewer Background
////Shoe Viewer Components
let shoeViewerBackground = document.querySelector("#shoeViewerBackground");
let changeShoeBack = document.querySelector("#changeShoeBack");
let changeShoeNext = document.querySelector("#changeShoeNext");
//Background Components
let shoeViewerIndex = 0;
let shoeViewerCollection = [
  "assets/homePageBackground/shoeAnnouncement_1.jpg",
  "assets/homePageBackground/shoeAnnouncement_2.jpg",
  "assets/homePageBackground/shoeAnnouncement_3.jpg",
  "assets/homePageBackground/shoeAnnouncement_4.jpg",
  "assets/homePageBackground/shoeAnnouncement_5.jpg",
];

//Set Background on Load
shoeViewerBackground.src = shoeViewerCollection[shoeViewerIndex];

//Changes Picture When Arrow is Clicked
//Previous Picture
changeShoeBack.addEventListener("click", () => {
  if (shoeViewerIndex > 0) {
    shoeViewerIndex--;
  } else {
    shoeViewerIndex = shoeViewerCollection.length - 1;
  }
  changeShoePicture();
});

//Next Picture
changeShoeNext.addEventListener("click", () => {
  if (shoeViewerIndex < shoeViewerCollection.length - 1) {
    shoeViewerIndex++;
  } else {
    shoeViewerIndex = 0;
  }
  changeShoePicture();
});

function changeShoePicture() {
  shoeViewerBackground.src = shoeViewerCollection[shoeViewerIndex];
}

//Set CantFindSearch Bar Placeholder width
let cantFindSearchBar = document.querySelector("#cantFindSearchBarInput");
cantFindSearchBar.setAttribute(
  "size",
  cantFindSearchBar.getAttribute("placeholder").length
);

//Jquery
//Show SubHeaders
$(".subHeader").hide();
$("#Buy").mouseenter(() => {
  $(".subHeader").show();
});
$(".subHeader").mouseenter(() => {
  $(".subHeader").show();
});
$(".subHeader").mouseleave(() => {
  $(".subHeader").hide();
});
