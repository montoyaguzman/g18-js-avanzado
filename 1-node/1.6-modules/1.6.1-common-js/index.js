

function main() {
    let numero1 = 10;
    let numero2 = 40;

    const resultSum = sum(numero1, numero2);
    const resultSubs = substract(numero1, numero2);
    const resultMult = multiply(numero1, numero2);
    const resultDiv = divideNumbers(numero1, numero2);

    console.log('suma: ', resultSum);
    console.log('resta: ', resultSubs);
    console.log('multiplicacion: ', resultMult);
    console.log('division: ', resultDiv);

}

main();