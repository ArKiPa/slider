const entities = [
{
    repairCost: 'Upon request',
    repairTime: '3.5 months',
    apartmentArea: '81 m2',
    city: 'Rostov-on-Don LCD admiral',
    cityMenu: 'Rostov-on-Don, Admiral',
    img: './img/sliderImg.png'
},
{
    repairCost: 'Upon request',
    repairTime: '4 months',
    apartmentArea: '105 m2',
    city: 'Sochi Thieves',
    cityMenu: 'Sochi Thieves',
    img: './img/sliderImg2.png'
},
{
    repairCost: 'Upon request',
    repairTime: '3 months',
    apartmentArea: '93 m2',
    city: 'Rostov-on-Don Patriotic',
    cityMenu: 'Rostov-on-Don Patriotic',
    img: './img/sliderImg3.jpg'
}
]

let currentIndex = 0;
let oldIndex = 0;
let countSlide = entities.length;

let controlElement = document.querySelector('.control-element');
let nextArrow = document.getElementsByClassName('swith-slide-arrow')[1];
entities.map((item, index) => {
    let switchButton = document.createElement('button');
    switchButton.classList.add('switch-slide');
    switchButton.textContent = index
    switchButton.addEventListener('click', (e) => {
        selectedSlide(e.target)
    })
    if (index == 0) {
        switchButton.classList.add('switch-slide-active');       
    }
    controlElement.insertBefore(switchButton, nextArrow)
})

let menu = document.querySelector('.slider-menu')
entities.map((item, index) => {
    let menuCity = document.createElement('li');
    menu.appendChild(menuCity)
    let menuButton = document.createElement('button');
    menuButton.classList.add('button-slider');
    menuButton.textContent = entities[index].cityMenu;
    menuButton.addEventListener('click', (e) => {
        selectedSlideFromMenu(e.target)
    })
    if (index == 0) {
        menuButton.classList.add('button-slider-active');       
    }
    menuCity.appendChild(menuButton)
})

setEntity(0);

function setEntity(index) {
    let image = document.querySelector('.slider-image')
    image.setAttribute('src', entities[index].img);
    let arrayMenu = document.getElementsByClassName('button-slider');
    let arrayCircle = document.getElementsByClassName('switch-slide');
    let city = document.querySelector('.slider-city');
    let apartmentArea = document.querySelector('.slider-apartment-area');
    let repairTime = document.querySelector('.slider-repair-time');
    let repairCost = document.querySelector('.slider-repair-cost');
    arrayMenu[oldIndex].classList.toggle('button-slider-active')

    arrayCircle[oldIndex].classList.toggle('switch-slide-active')
    arrayMenu[index].classList.toggle('button-slider-active')
    arrayCircle[index].classList.toggle('switch-slide-active')
    city.textContent = entities[currentIndex].city
    apartmentArea.textContent = entities[currentIndex].apartmentArea
    repairTime.textContent = entities[currentIndex].repairTime
    repairCost.textContent = entities[currentIndex].repairCost
}

function selectedSlideFromMenu(button) {
    oldIndex = currentIndex;
    let textButton = button.textContent;
    entities.map ((item,index) => {
        if (item.cityMenu===textButton) {
            let oldIndex = currentIndex;
            currentIndex = index;
            setEntity(currentIndex);
        }
    });
}

function selectedSlide(button) {
    oldIndex = currentIndex;
    currentIndex = button.textContent;
    setEntity(currentIndex);
  }
  
function prevSlide() {
    oldIndex = currentIndex;
    currentIndex = currentIndex - 1;
    if (currentIndex<0) {
        currentIndex += (countSlide);
    }
    setEntity(currentIndex);
}

function nextSlide() {
    oldIndex = currentIndex;
    currentIndex = currentIndex - 1 + 2;
    if (currentIndex===countSlide) {
        currentIndex -= countSlide;
    }
    setEntity(currentIndex);
}

switchSlideArrow = document.getElementsByClassName('swith-slide-arrow')
switchSlideMobile = document.getElementsByClassName('switch-slide-mobile')
switchSlideArrow[0].addEventListener('click', () => {
    prevSlide()
})
switchSlideArrow[1].addEventListener('click', () => {
    nextSlide()
})
switchSlideMobile[0].addEventListener('click', () => {
    prevSlide()
})
switchSlideMobile[1].addEventListener('click', () => {
    nextSlide()
})