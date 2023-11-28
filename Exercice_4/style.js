const motDePasse = document.getElementById('password');
const confirmationMotDePasse = document.getElementById('confirmPassword');

const button = document.querySelector('button');


button.addEventListener('click', () => {
    if(motDePasse.value === confirmationMotDePasse.value){
        motDePasse.style.border = 'solid 3px green';
        confirmationMotDePasse.style.border = 'solid 3px green';
    } 
    else{
        motDePasse.style.border = 'solid 3px red';
        confirmationMotDePasse.style.border = 'solid 3px red';
    }



})

