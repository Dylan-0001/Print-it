//SLIDES LIST
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//VARIABLES
const bannerImg = document.querySelector(".banner-img");
const bannerP = document.querySelector(".banner-p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
	
//CURRENT SLIDE INITIALIZATION
let currentSlide = 0;

//DOTS INITIALIZATION
for(let i = 0; i < slides.length; i++)
{
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
}
updateDots();

//ARROW LEFT CLICK LISTENER
arrowLeft.addEventListener("click", () => 
{
	console.log(currentSlide);
	updateBanner(false);
});

//ARROW RIGHT CLICK LISTENER
arrowRight.addEventListener("click", () => 
{
	console.log(currentSlide);
	updateBanner(true);
});

//UPDATE BANNER FUNCTION
function updateBanner(increment) 
{
	currentSlide = increment ? (currentSlide + 1) % slides.length : (currentSlide - 1 + slides.length) % slides.length;

	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerP.innerHTML = slides[currentSlide].tagLine;
	updateDots();
}

//DOTS UPDATE FUNCTION
function updateDots()
{
	dots.querySelectorAll(".dot").forEach((dot, index) => 
	{
		index === currentSlide ? dot.classList.add("dot_selected") : dot.classList.remove("dot_selected");
	});
}