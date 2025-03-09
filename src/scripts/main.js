'use strict';

const logo = document.querySelector('.logo');
const divElement = document.createElement('div');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((text) => {
  divElement.innerText = text;
  divElement.classList.add('message');
  document.body.appendChild(divElement);
});

promise2.catch((error) => {
  divElement.innerText = error;
  divElement.classList.add('message', 'error-message');
  document.body.appendChild(divElement);
});
