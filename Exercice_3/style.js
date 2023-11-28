let firstDiv = document.querySelector('.green');
let secondDiv = document.querySelector('.red');
let thirdDiv = document.querySelector('.blue');
console.log(firstDiv, secondDiv, thirdDiv);
let texte = document.querySelector('p')
console.log(texte);

firstDiv.addEventListener('click', () => {
     texte.style.color = 'green';
})
secondDiv.addEventListener('click', () => {
    texte.style.color = 'red';
})
thirdDiv.addEventListener('click', () => {
    texte.style.color = 'blue';
})