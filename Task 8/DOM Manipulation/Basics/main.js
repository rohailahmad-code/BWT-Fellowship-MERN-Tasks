

// GetElementById()

// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementsByClassName

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem)

// GetElementByTagName()


// const listItem = document.getElementsByTagName('li');
// console.log(listItem)

// QuerySelector

// const container = document.querySelector('div');
// console.log(container);


// QuerySelectorAll

// const container = document.querySelectorAll('div');
// console.log(container);

// DOM Manipulation

// Styling Elements 

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItem = document.querySelectorAll('.list-items');


// for (i = 0; i < listItem.length; i++) {
//     listItem[i].style.fontSize = '2rem';

// }

// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding element 

ul.append(li);

// Modifying Text 

li.innerText = 'Wolverine';

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)

// Modifying Attributes and Classes

li.classList.add('list-items');

console.log(li.classList.contains('list-items'))

// Remove Element 

li.remove();


