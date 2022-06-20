// Crear el array de objetos "Pizzas". 🍕
// Debemos crear 6 objetos como mínimo.
// Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

//  Crear una iteración del array que imprima en consola:
/* a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.
 */


//  ARRAY DE OBJETOS PIZZAS ----------------------------------------------

const pizzas = [
{ id: 1,
nombre: "muzarella",
ingredientes: ["muzzarella", "salsa", "aceitunas"],
precio: 800, },
{ id: 2,
nombre: "hawaiana",
ingredientes: ["muzzarella", "salsa", "anana", "jamon", "extra queso"],
precio: 1400, },
{ id: 3,
nombre: "deluxe",
ingredientes: ["muzzarella", "salsa", "peperoni", "salchichas", "pimientos", "cebollas", "champignones"],
precio: 1500, },
{ id: 4,
nombre: "americana",
ingredientes: ["muzzarella", "salsa", "jamon", "aceitunas"],
precio: 980, },
{ id: 5,
nombre: "hot chicken",
ingredientes: ["muzzarella", "salsa", "pollo", "pimientos", "champignones"],
precio: 1500, },
{ id: 6,
nombre: "super queso",
ingredientes: ["muzzarella", "4 quesos", "aceitunas", "cebolla"],
precio: 1200, },
{ id: 7,
nombre: "roquefort",
ingredientes: ["muzzarella", "salsa", "roquefort", "jamon"],
precio: 1100, },
];


// a) Las pizzas que tengan un id impar.

pizzas.forEach((pizzaImpar) => {
   if (pizzaImpar.id % 2 !== 0) {
      console.log(`La pizza con id ${pizzaImpar.id} es impar`);
   }
   });

// b) ¿Hay alguna pizza que valga menos de $600?

if (pizzas.precio > 600){
   console.log("En esta lista tenemos pizzas a menos de $600")
}
else {
   console.log("En esta lista no tenemos pizzas a menos de $600")
}

// c)Los nombres de todos las pizzas.

console.log(`La lista de nuestras pizzas mas vendidas es:`)
pizzas.forEach((pizza, i) => console.log(`${i + 1}) ${pizza.nombre}`));

// d) Los precios de las pizzas.

console.log(`La lista de precios de nuestras pizzas mas vendidas es:`)
pizzas.forEach((pizza, i) => console.log(`${i + 1}) ${pizza.precio}`));

// e) El nombre de cada pizza con su respectivo precio.

pizzas.forEach ((variedad) => {
   console.log(`La variedad de pizza ${variedad.nombre} sale $ ${variedad.precio}`)
   }); 