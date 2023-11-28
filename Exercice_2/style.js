
const button = document.querySelectorAll('a')
console.log(button);
const texte = document.querySelector('p')
console.log(texte);


button[0].addEventListener('click',function(){
texte.style.display='block';
})
button[1].addEventListener('click',function(){
    texte.style.display='none';
})
