/**
 * BLOQUE 3 - Solucion 1 CALLBACKS
 * Un callback es una funcion que pasamos como parametro a otra funcion,
 * con el fin de ejecutar la funcion que se pasa como parametro en el 
 * momento que queramos.
 * NOTA: No es una buena practica utilizar calbacks porque se van anidando 
 * y el codigo se vuelve ilegible.
 */
console.log('============== BLOQUE 3 ==============');

const showSuccessMessage = () => {
    console.log('3 Ver el mensaje de "gracias joven"');
};

const validatePayment = (showSuccessMessage) => {
    setTimeout(() => {
        console.log('2 Validando la tarjeta');
        showSuccessMessage();
    }, 0);
};

console.log('1 Presiona el boton boton de comprar'); 
validatePayment(showSuccessMessage);

