/*MILLETONE-1*/

/*CREAZIONE CICLO*/

for (let i = 1; i <= 100; i++) {

    let fizzOrBuzz;

    /*IMPOSTO CONDIZIONI*/

    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrBuzz='FizzBuzz';
    } else if (i % 5 === 0) {
        fizzOrBuzz='Buzz';
    } else if (i % 3 === 0) {
        fizzOrBuzz='Fizz';
    }
    console.log( i + ' ' + fizzOrBuzz);
}