//globle variable for pages
const home=document.querySelector(".backgroundBoard");
const project=document.querySelector(".projectSection");
const hire=document.querySelector(".hire");

let projectSEC=document.querySelector(".project");
let hireSEC=document.querySelector(".hirebtn");
projectSEC.addEventListener('click', function(){
    home.style.display="none";
    project.style.display="flex";
    hire.style.display = "none";
});
hireSEC.addEventListener('click', function(){
    home.style.display="none";
    project.style.display="none";
    hire.style.display = "grid";
});


function display(id) {
    switch (id) {
        case 'page1':
            if (home.style.display !== "flex") {
                home.style.display = "flex";
            }
            project.style.display = "none";
            hire.style.display = "none";
            break;
        case 'page2':
            home.style.display = "none";
            if (project.style.display !== "flex") {
                project.style.display = "flex";
            }
            hire.style.display = "none";
            break;
        case 'page3':
            home.style.display = "none";
            project.style.display = "none";
            if (hire.style.display !== "flex") {
                hire.style.display = "grid";
            }
            break;
        default:
            home.style.display = "flex";
            project.style.display = "none";
            hire.style.display = "none";
            break;
    }
}
 

const left = document.getElementById("left");
const right = document.getElementById("right");
const sliderContainer = document.querySelector(".slideItems");
const dotContainer = document.querySelector(".dotContainer");
let items = document.querySelectorAll(".items");
        
let currentIndex = 0;
let length = items.length;

// Create dots
for (let i = 0; i < length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentIndex) {
        dot.classList.add('active');
    }
    dotContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

right.addEventListener('click', function() {
    if (currentIndex < length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Optionally, reset to first slide
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
});

left.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = length - 1; // Optionally, go to last slide
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    });
});


