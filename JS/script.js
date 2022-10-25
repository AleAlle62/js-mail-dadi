
/*
ES 1
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
/*
PROCEDIMENTO ES 1

. con prompt chiedere una mail
. scorrere l'array ogni elemento verificando se corrisponde alla mail inserita
. se corrispode dire SI, altrimenti NO

*/

//soluzione con INCLUDES
//BONUS

let inputEmail = document.querySelector('.htmlmail')
let btnConferma = document.querySelector('.conferma')
let Risultato = document.querySelector('.risultatomail')
// let Risultato2 = document.querySelector('.risultatomail2')

let inputArray = ['basketallegrini@gmail.com', 'alessio.allegrinia@gmail.com', 'a.allegrini2@gmail.com']





btnConferma.addEventListener('click', function(){
    
    if (inputArray.includes(inputEmail)){
        console.log('email presente')
        Risultato.innerHTML = 'CORRETTO <i class="fa-solid fa-square-check"></i>'

    } else {
        console.log('email NON presente')
        Risultato.innerHTML = 'SBAGLIATO <i class="fa-solid fa-triangle-exclamation"></i>'
    }


    
})





//soluzione con il FOR (che non restituisce nulla se la mail non ne fa parte)

// let inputArray2 = ['basketallegrini@gmail.com', 'alessio.allegrinia@gmail.com', 'a.allegrini2@gmail.com']
// let inputEmail2 = prompt('inserisci la tua mail:')

// for ( let i = 0; i < inputArray2.length ; i++) {

//     if (inputEmail2 === inputArray2[i]){
//         console.log ('email presente')
//     } 

//     // else {
//     //     console.log('email NON presente')
//     // }
// }


/*
ES 2

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/
/*
PROCEDIMENTO ES 2

. creare due giocatori
. creare un numero a caso da 1 a 6 per ogniuno
. se uno è > o < dell'altro vince

*/

// function computer(max) {
//     return Math.floor(Math.random(1) * max);
// }
// function player(max) {
//     return Math.floor(Math.random(2) * max);
// }

// // computer
// console.log('il PC ha fatto:' + computer(7));

// // player 
// console.log('il PLAYER ha fatto:' + player(7));


// if ( Math.random(2) === Math.random(1)){
//     console.log('pareggio')
// } else if ( Math.random(2) > Math.random(1)){
//     console.log('quindi ha vinto il PLAYER')
// } else {
//     console.log('quindi ha vinto il PC')
// }


