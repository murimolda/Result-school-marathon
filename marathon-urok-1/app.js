const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlides = 0){
  slides[activeSlides].classList.add('active');

  for(const slide of slides){
    slide.addEventListener('click', ()=>{
      closeActiveClasse();
      slide.classList.add('active');
    })
  }

  const closeActiveClasse = () =>{
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  }
}

//делаем активным рандомный слайд при открытии страницы//
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

slidesPlugin(randomInteger(0, slides.length-1));