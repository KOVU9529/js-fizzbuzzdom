/*MILLESTONE-2*/

const mainList = document.querySelector ('.list');

/*CREAZIONE CICLO*/

for (let i = 1; i <=100; i++) {

    let fizzOrBuzz;

    const newLi =`<ul class="list"> ${i}</ul>`;

    /*CONDIZIONI*/

    if (i % 3 ===0 && i % 5 ===0){
        fizzOrBuzz='FizzBuzz';
    } else if (i % 5 ===0){
        fizzOrBuzz='Buzz'; 
    } else if (i % 3 ===0){
        fizzOrBuzz='Fizz'; 
    }

    mainList.innerHTML += newLi + fizzOrBuzz;
}