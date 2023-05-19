const tabsContent = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const sliderCounter = document.querySelector(".offer__slider-counter");
const currentSlider = document.querySelector("#current");
const totalSlides = document.querySelector("#total");
const prevButton = document.querySelector(".offer__slider-prev");
const nextButton = document.querySelector(".offer__slider-next");
const sliderWrapper = document.querySelector(".offer__slider-wrapper");
const slides = document.querySelectorAll(".offer__slide");

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (e) => {
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(item === target){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

let currentSlide = 0;

function showSlide(slideIndex) {
  tabsContent.forEach((tabsContent, index) => {
    if (index === slideIndex) {
      tabsContent.style.display = "block";
      tabs[index].classList.add("tabheader__item_active");
    } else {
      tabsContent.style.display = "none";
      tabs[index].classList.remove("tabheader__item_active");
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= tabsContent.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function startSlider() {
  showSlide(currentSlide);
  setInterval(nextSlide, 2000);
}

startSlider();

let slideIndex = 0;

function showSlider(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
  currentSlider.textContent = formatSlideIndex(index + 1);
}

function formatSlideIndex(index) {
  return index.toString().padStart(2, "0");
}

function updateSliderCounter() {
  totalSlides.textContent = formatSlideIndex(slides.length);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlider(slideIndex);
}

function nextSlider() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlider(slideIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlider);

updateSliderCounter();
showSlider(slideIndex);
