/*
    - Stampare lista di numeri da 1 a 100;
    - I multipli di 3 dovranno aver scritto "Fizz" invece del numero;
    - I multipli di 5 dovranno avere scritto "Buzz" invece del numero;
    - I numeri divisibili per 15 dovranno avere scritto "FizzBuzz invece del numero"
*/

 /* 

    Se do un valore di 0 ad i, posso procedere a dire che i = <= 100;
    i = 0
    0 <= 100 ---> True

    Se, tra i numeri da 1 a 100, ci sono dei numeri divisibili per 15, la console dovrà stampare FizzBuzz.
    Prendendo la lista dei numeri (rappresentata da i) bisogna identificare quale numero sarà divisibile per 15 attraverso %.
    Infine, sarà necessario dare il comando di stampare FizzBuzz.
    1° Iterazione:
    Se (i % 15 === 0) console.log("FizzBuzz");

    Stesso procedimento sarà fatto con 3 e 5, utilizzando % per far individuare in automatico quali siano i multipli di 3 e 5.
    2° e 3° Iterazione:
    Else if (i % 5 === 0) console.log("Buzz");
    Else if (i % 3 === 0) console.log("Fizz");
    

    Nei casi in cui non ci saranno numeri divisibili per 15 o multipli di 3 e 5, la console dovrà stampare semplicemente dei numeri.
    4° Iterazione:
    else console.log(i)
 */

for(let i = 0; i <= 100; i++) {
    if (i % 15 === 0)
        console.log("FizzBuzz");
    else if ( i % 5 === 0)
        console.log("Buzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else
        console.log(i);
}
