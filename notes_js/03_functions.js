// FUNCIONES  (ƒ) - Bloque de construcción similar a un procedimiento. (entrada y salida relacionadas).
// Bloque de codigo autocontenido independiente del scope o ámbito global.
// Se define 1 vez.
// Puede ser reutilizada o ejecutada/invocada en cualquier momento del codigo.
// Puede o no recibir parametros.
// Puede devolver valores.
// Un tipo de dato muy especial, son consideradas objetos.
// las funciones se definen o "declaran" de diferente manera.

//****FUNCIÓN DECLARADA**** - SE DEFINE EN EL AMBITO GLOBAL. ES DECLARADA PUES LLEVA LA PALABRA RESERVADA function Y LLEVA NOMBRE
//PARA PODER SER LLAMADA DESDE CUALQUIER PARTE.
//DENTRO DE LOS {BRACKETS} VA EL CUERPO.
//SE INVCOCA CON ()
function sum(a, b) {
  return a + b;
}

//***FUNCIÓN EXPRESADA*** - PUEDE SER GLOBAL O LOCAL PERO SI LOCAL SOLO FUNCIONA DENTRO DEL BLOQUE DENTRO DE DONDE ESTA EXPRESADA.
// PUEDE SER O NO ANONIMA.
let sum = function (a, b) {
  return a + b;
};

//***FUNCIÓN CON CONSTRUCTOR***
let sum = new Function(arg1, arg2, arg3, "cuerpo de la ƒ()");

//***FUNCIÓN FLECHA  O ARROW FUNCTION ->*** - NO NECESARIAMENTE EN UNA VARIABLE. NO FUNCIONA EN CLASES.
// La escritura es mas expresiva y estetica.

// Forma básica de una Arrow Function con un solo parámetro y una sola línea de retorno
const sumar = (a, b) => a + b;

// No en variable
// Utilizamos una Arrow Function directamente en el argumento de la función `setTimeout`
setTimeout(() => {
  console.log("¡Este mensaje se imprimirá después de 2 segundos!");
}, 2000);

// Arrow Function equivalente de una función tradicional
// function suma(a, b) {
//   return a + b;
// }

// TEMA: HERENCIA DE VALOR DE THIS EN ARROW FUNCTIONS

const obj = {
  nombre: "Juan",
  // Función tradicional con valor de `this` vinculado al objeto `obj`
  saludar: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  },
  // Arrow Function: No tiene su propio `this`, hereda el `this` del contexto en el que se define
  saludarArrow: () => {
    console.log("Hola, mi nombre es " + this.nombre); // En este caso, `this.nombre` sería undefined
  },
};

obj.saludar(); // Output: Hola, mi nombre es Juan
obj.saludarArrow(); // Output: Hola, mi nombre es undefined (porque `this.nombre` es undefined)

// TEMA: LIMITACIONES DE ARROW FUNCTIONS

// Función tradicional que puede usarse como constructor
function Persona(nombre) {
  this.nombre = nombre;
}

const persona1 = new Persona("Juan");

// Arrow Function no puede usarse como constructor
const PersonaArrow = (nombre) => {
  this.nombre = nombre; // Esto daría un error porque `this` no está vinculado en Arrow Functions
};

const persona2 = new PersonaArrow("Ana"); // Esto daría un error

//  En JavaScript, es común utilizar camelCase para nombrar variables y funciones, y PascalCase para nombrar clases.
