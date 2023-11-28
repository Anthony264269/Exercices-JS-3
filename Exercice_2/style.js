
const button = document.querySelectorAll('a')
console.log(button);
const texte = document.querySelector('p')
console.log(texte);
console.log('BUTTON 0', button[0]);
console.log('BUTTON 1', button[1]);

button[0].addEventListener('click',function(){
texte.style.display='block';
})
button[1].addEventListener('click',function(){
    texte.style.display='none';
})
