/*MILLESTONE-3*/

const containerNumbers = document.querySelector ('.container-numbers');

/*CREAZIONE-CICLO*/

for (let i = 1; i <= 100; i++) {

    let fizzOrBuzzClassName;
    let fizzOrBuzz;

    if (i % 3 === 0 && i % 5 === 0 ) {
        fizzOrBuzzClassName= 'FizzBuzz';
        fizzOrBuzz='FizzBuzz';
    } else if (i % 5 === 0) {
        fizzOrBuzzClassName= 'Buzz';
        fizzOrBuzz='Buzz';
    } else if (i % 3 === 0) {
        fizzOrBuzzClassName= 'Fizz';
        fizzOrBuzz='Fizz';
    } else{
        fizzOrBuzz= i;
    }

    const newBox = `<div class="box ${ fizzOrBuzzClassName}">${fizzOrBuzz} </div>`;
    containerNumbers.innerHTML += newBox;
}