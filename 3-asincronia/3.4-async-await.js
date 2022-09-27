/**
 * BLOQUE 5 - Solucion 3 Async await
 */
 console.log('============== BLOQUE 5 ==============');

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
 

async function main() {
    console.log('1 Presiona el boton boton de comprar');

    try {
        await validatePaymentPromise();
        console.log('3 Ver el mensaje de "gracias joven"');
        console.log('4 Entregaremos el paquete N dia');
        // await otraPromise();
        // const callApi = await callOtherApi();
        // const pokemones = await callApi.json();
        // console.log('pokemones: ', pokemones);
    } catch(error) {
        console.log('error: ', error);
    }
    
    console.log("============== FINAL ==============");
    console.log("============== FINAL 2 ==============");
    
}

main();





 