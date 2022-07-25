let temp = 0;
window.addEventListener('scroll', scrollFunction);

function scrollFunction(){

    if(temp === 0 && window.pageYOffset > 10) {
        window.scrollTo(0, 640);
        temp = 1;
        loadStats();
    }

}


//slider code
const slides = document.querySelectorAll('.slider-bg');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let counter = 0;

next.addEventListener('click' , () =>{
    counter++;
    if (counter > 3){
        counter=0;
    }
    updateSlider();
});

prev.addEventListener('click', ()=>{
    counter--;
    if(counter < 0){
        counter = 3;
    }
    updateSlider();
});

function updateSlider(){
    slides.forEach( (slide) => {
        slide.style.transform= `translateX(-${counter*100}%)`;
        let tempColor = randomColor();
        console.log(tempColor);
        slide.style.backgroundColor = `${tempColor}`;
    });

}

function randomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = '#' + randomColor;
    return randomColor;
}

//stats
function loadStats(){
const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target');
        const temp = +counter.innerText;

        const increment = target / 200;

        if(temp < target){
            counter.innerText = `${Math.ceil(temp + increment)}`;
            setTimeout(updateCounter,13);
        }
    }
    updateCounter();
});
}