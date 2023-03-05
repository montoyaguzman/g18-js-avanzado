/**
 * BLOQUE 4 - Solucion 2 Promises (pending, resolve y reject)
 */
console.log('============== BLOQUE 4 ==============');

const validatePaymentPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Validando la tarjeta');
            
            const statusArray = [200, 500];
            const randomResponse = statusArray[Math.floor(Math.random() * statusArray.length)];
            if (randomResponse === 200) {
                // 200 OK
                resolve('todo gucci!');
            } else {
                // 500 Internal server error
                reject('tu tarjeta fue declinada :c');
            }

        }, 0);
    });
    
}

console.log('1 Presiona el boton boton de comprar'); 
validatePaymentPromise()
    .then(response => {
        console.log(response);
        console.log('3 Ver el mensaje de "gracias joven"');
    })
    .then(() => {
        console.log('4 Entregaremos el paquete N dia');
    })
    .catch((error) => {
        console.log('error: ', error);
    })
    .finally(() => {
        console.log("============== FINAL ==============");
    });
    console.log("============== FINAL 2 ==============");
