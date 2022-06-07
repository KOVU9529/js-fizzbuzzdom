/*MILLESTONE-3*/

const containerNumbers = document.querySelector ('.container-numbers');

/*CREAZIONE-CICLO*/

for (let i = 1; i <= 100; i++) {

    let fizzOrBuzzClassName;

    if (i % 3 === 0 && i % 5 === 0 ) {
        fizzOrBuzzClassName= 'FizzBuzz';
    } else if (i % 5 === 0) {
        fizzOrBuzzClassName= 'Buzz';
    } else if (i % 3 === 0) {
        fizzOrBuzzClassName= 'Fizz';
    }

    const newBox = `<div class="box ${ fizzOrBuzzClassName}">${i}</div>`;
    containerNumbers.innerHTML += newBox;
}