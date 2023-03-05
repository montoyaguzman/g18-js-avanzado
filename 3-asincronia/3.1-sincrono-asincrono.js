/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
// console.log('============== BLOQUE 1 ==============');
// console.log('Primero'); 
// console.log('Segundo');
// console.log('Tercero');


/**
 * BLOQUE 2 - Problema tipico de asincronia
 */
console.log('============== BLOQUE 2 ==============');
const validatePayment = () => {
    setTimeout(() => {
        console.log('2 Validando la tarjeta');
    }, 0);
}

console.log('1 Presiona el boton boton de comprar'); 
validatePayment();
console.log('3 Ver el mensaje de "gracias joven"');
