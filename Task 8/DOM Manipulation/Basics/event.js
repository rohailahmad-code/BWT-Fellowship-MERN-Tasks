

// click event

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn() {
//     alert('Hello Thereeeeeee');
// }

// buttonTwo.addEventListener('click', alertBtn);


// // Mouseover

// const boxThree = document.querySelector('.box-3');

// function mouseOver() {
//     boxThree.style.background = 'red';
// }

// boxThree.addEventListener('mouseover', mouseOver);



// Reveal button

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal--btn')) {
        hiddenContent.classList.remove('reveal-btn');
    }else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);