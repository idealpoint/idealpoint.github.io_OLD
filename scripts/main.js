// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/welcome.png') {
    myImage.setAttribute('src', 'images/welcome2.jpg')
  } else {
    myImage.setAttribute('src', 'images/welcome.png')
  }
}

// document.querySelector('h1').onclick = function() {
//   alert('You clicked Header!')
// }

let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function () {
  setUserName();
}