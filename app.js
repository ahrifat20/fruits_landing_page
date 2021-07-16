//selector
const fruit = document.querySelector('#fruit');
const background = document.querySelector('#bg');
const apple = document.querySelector('.apple')
const mango = document.querySelector('.mango')
const pineApple = document.querySelector('.pineApple')
const dragonFruits = document.querySelector('.dragonFruits')
const watermelon = document.querySelector('.watermelon')

//fruit change
const changeImage = (imagePath) => {
    fruit.src = imagePath;
};

//background change
const bgChange = (bg) => {
    background.style.background = bg;
};

apple.addEventListener('click', () => {
    changeImage('images/apple.png');
    bgChange('#fc4a55');
});

mango.addEventListener('click', () => {
    changeImage('images/mango.png');
    bgChange('#ffec02');
});

pineApple.addEventListener('click', () => {
    changeImage('images/pineApple.png');
    bgChange('#ffb42b');
});

dragonFruits.addEventListener('click', () => {
    changeImage('images/dragonFruits.png');
    bgChange('#fb6cb2');
});

watermelon.addEventListener('click', () => {
    changeImage('images/watermelon.png');
    bgChange('#92ba3c');
});


//select fruite and display name
let allElements = document.querySelectorAll('#thumb li');

for(let i = 0; i < allElements.length; i++) {
    allElements[i].onclick = () => {
        var item = 0;
        while( item < allElements.length) {
            allElements[item++].className = 'check';
        }
        allElements[i].className = 'check active';
    }
};

const menuToggle = document.querySelector('#toggle');
const navigation = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
})