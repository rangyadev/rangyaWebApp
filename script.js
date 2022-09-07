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
setInterval(function() {
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

//Releases Cards
let numberOfCards = 3;

//Releases Cards
let newReleases = document.querySelector("#newReleases");
let releasingSoons = document.querySelector("#releasingSoon");
let newReleasesCollection = [
	{
		image: "assets/shoeItems/paranoise_1.jpg",
		title: "ParaNoise 2.0",
		desc: "G-Dragon x Nike",
	},
	{
		image: "assets/shoeItems/kwondo_1.jpeg",
		title: "KWONDO 1",
		desc: "Peaceminusone x Nike",
	},
	{
		image: "assets/shoeItems/DunkPanda_1.jpg",
		title: "Dunk Low Panda",
		desc: "Nike Dunk Low Retro",
	},
	{
		image: "assets/shoeItems/DunkPanda_1.jpg",
		title: "Dunk Low Panda",
		desc: "Nike Dunk Low Retro",
	},
	{
		image: "assets/shoeItems/DunkPanda_1.jpg",
		title: "Dunk Low Panda",
		desc: "Nike Dunk Low Retro",
	},
];
let releasingSoonCollection = ["tite", "tite", "tite"];
let newReleasingCollectionIndex = 0;
//Create New Releases
for (let i = 0; i < numberOfCards; i++) {
	if (typeof newReleasesCollection[i] == "undefined") continue;
	newReleasingCollectionIndex = i;
	//Creates Cards
	let newRelease = document.createElement("div");
	newRelease.classList.add("ReleasesCard");
	newReleases.appendChild(newRelease);
	//Add Info to the Cards
	let newReleaseImage = document.createElement("img");
	let newReleaseInfo = document.createElement("div");
	let newReleaseTitle = document.createElement("h2");
	let newReleaseDesc = document.createElement("p");
	let newReleaseLink = document.createElement("a");
	//Adds Text via the Objects
	newReleaseImage.setAttribute(
		"src",
		newReleasesCollection[newReleasingCollectionIndex].image
	);
	newReleaseInfo.classList.add("releasesCardInfo");
	newReleaseTitle.textContent =
		newReleasesCollection[newReleasingCollectionIndex].title;
	newReleaseDesc.textContent =
		newReleasesCollection[newReleasingCollectionIndex].desc;
	newReleaseLink.style.backgroundColor = "#06e666";
	newReleaseLink.textContent = `Buy Now`;
	//Appends the divs and image
	newRelease.appendChild(newReleaseImage);
	newRelease.appendChild(newReleaseInfo);
	//Appends the info inside the div
	newReleaseInfo.appendChild(newReleaseTitle);
	newReleaseInfo.appendChild(newReleaseDesc);
	newReleaseInfo.appendChild(newReleaseLink);
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
	let releasingSoon = document.createElement("div");
	releasingSoon.classList.add("ReleasesCard");
	releasingSoons.appendChild(releasingSoon);
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

//Change Collection Index
//New Releasing
nextNewReleases.addEventListener("click", () => {
	newReleasingCollectionIndex++;
	console.log(newReleasingCollectionIndex);
});
