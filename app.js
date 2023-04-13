console.log("----------1-----------")
// 1. hasId
// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto 
// tiene una propiedad llamada id (debe devolver booleano true/false).


const collection1 = [{ 
    id: 23453, 
    author: "J. Simmons",
    pages: 250,
    title: "The Dark",
    read: true
}];

const hasId = books => books.every(book => book.id);
console.log(hasId(collection1));

console.log("----------2-----------")
// 2. head
// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

const collection2 = [
    { correcto: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true }
]
const head = (collection) => {
    const [first] = collection;
    console.log(first);
}

head(collection2)

console.log("----------3-----------")
// 3. tail
// Implementa una función llamada tail tal que, dado un array como entrada, 
// devuelva un nuevo array con todos los elementos menos el primero.

const collection3 = [1, 2, 3, 4, 5];

const tail = (collection) => {
    const [, ...rest] = collection;
    return rest;
}
console.log(tail(collection3))

console.log("----------4-----------")
// 4. swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, 
// devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.

const collection4 = [1, 2, 3, 4, 5];

const swapFirstToLast = (collection) => {//Use destructuring directly in the parameter and return directly
    const [firts, ...rest] = collection;//typo here
    const response = [rest, first]
    rest.push(firts);
    const newArray = rest;
    console.log(newArray);
}
swapFirstToLast(collection4)

console.log("----------5-----------");
// 5. excludeId
// Implementa una función llamada excludeId tal que, dado un objeto como entrada,
// devuelva dicho objeto clonado excepto la propiedad id si la hubiera.

const Collection5 =  { 
    id: 23453, 
    correcto: "J. Simmons", 
    pages: 250, title: "The Dark",
     read: true 
};


const excludeId = (collection) => {//Use destructuring directly in the parameter and return directly
    const {id, ...rest} = collection;
    const newObject = rest;
    return newObject;
};
console.log(excludeId(Collection5));

console.log("----------6-----------");
// 6. wordsStartingWithA
// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada,
// devuelva otro array filtrado con aquellas palabras que empiecen por a.

const Collection6 = ["llave", "puerta", "amor", "casa", "amanecer"];

const wordsStartingWithA = strings => strings.filter(string => string[0] === "a")

console.log(wordsStartingWithA(Collection6));

console.log("----------7-----------");
// 7. concat
// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y 
// devuelva otro string con la concatenación de todos, separados por |.

const concat = (...names) => {
    let result = "";
    for (const name of names){//use a ES6 method here
        result+= name + "|";
    }
    return result;
}
console.log(concat("Jose", "Patri", "Luis"));

console.log("----------8-----------");
// 8. multArray
// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro 
// que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

const collection8 = [3, 7, 5, 6];

const multArray = (arr, x) => {
    return arr.map(num => num * x)// you do not need the {return} here > return directly from =>
};

console.log(multArray(collection8, 5));

console.log("----------9-----------");
// 9. calcMult
// Implementa una función llamada calcMult que admita múltiples 
// números como argumento y devuelva como resultado el producto de todos ellos.

const calcMult = (...nums) => {
    let result = 1;
    for (const num of nums){//use method reduce here
        result*= num;
    }
    return result;
}
console.log(calcMult(1, 2, 3, 4));

console.log("----------EJERCICIOS EXTRA-----------");
console.log("----------10-----------");
// 10. swapFirstSecond
// Implementa una función swapFirstSecond tal que dado un array, 
// devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

const collection10 = [1, 2, 3, 4, 5, 6];

const swapFirstSecond = (collection) => {//Use only ES6 methods and spread directly in the parameter
    const [first, second, ...theRest] = collection;
    theRest.reverse()
    theRest.push(first);
    theRest.push(second);
    const collectionChange = theRest;
    return collectionChange.reverse();
}
console.log(collection10)
console.log(swapFirstSecond(collection10));

console.log("----------11-----------");
// 11. firstEqual
// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un 
// carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.


const firstEqual = ( letter, ...names) => {//Use ES6 method here 
    for ( n of names) {
        if(n[0] !== letter){
            return false;
        }
    }
    return true;
};

console.log(firstEqual("a", "amor", "asco", "bueno"));
console.log(firstEqual("a", "amor", "asco"));

console.log("----------12-----------");
// 12. longest
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
            //PREGUNTAR SI COMPARTEN MISMA LONGITUD
function longest(...arrays) {
    const longestArray = arrays.reduce((a, b) => (a.length > b.length ? a : b));
    return longestArray;
  }

console.log(longest([1], [1, 2], [1, 2, 3], [4, 5, 6], [1, 2, 3]));

console.log("----------13-----------");
//13. searchInStringV1
// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter,
// devuelva cuantas veces aparece dicho carácter en el string.

const searchInStringV1 = (str, char) => {
    const count = [...str].reduce((acc, currentChar) => {
        return currentChar === char ? acc + 1 : acc;
    }, 0);
    return count;
}

console.log(searchInStringV1("elemento", "e"));
console.log("----------14-----------");
// 14. searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2,
// encontrando otra alternativa sin usar reduce.

const searchInStringV2 = (str, char) => {
    const arr = [...str];
    const count = arr.filter((c) => c === char).length;
    return count;
  }
  console.log(searchInStringV2("elemento", "e"));

  console.log("----------15-----------");
// 15. sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, 
// lo devuelva con sus letras ordenadas alfabéticamente.

const sortCharacters = (str) => {
    const newArray = str.split('').sort().join('');
    return newArray;
};
console.log(sortCharacters("TODOS LOS DIAS"))
console.log(sortCharacters("¿cuanto más?")); // PREGUNTAR ORDENACION ALFABETONUMERICASIGNOS EN EL STRING

console.log("----------16-----------");
// .16 shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, 
// devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

// const shout = (...words) => {
//     let result = "";
//     for (word of words) {
//         result+= word;
//     }
//     return "¡" + result.toUpperCase() + "!";
// }
// console.log(shout("Hola", "Que", "tal"))

const shout = (...words) => {
    let result = "";
    for (word of words) {
        result+= word;
    }
    return "¡" + result.toUpperCase() + "!";
}
console.log(shout("Hola", "Que", "tal"))

// 17. Lista de la compra

// Dada la siguiente lista de la compra:
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
  ];

    console.log("----------17A-----------");
    // A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const addVat = (id, elements) => elements.map(element => {
    return {...element, id};
});
console.log(addVat("21%", shoppingCart));

    console.log("----------17B-----------");
    // B. Ordena la lista de más a menos unidades.
const sortedCart = elements => elements.sort((a, b) => (a.units > b.units ? -1 : 1));
console.log(sortedCart(shoppingCart))

    console.log("----------17C-----------");
    // C. Obtén el subtotal gastado en droguería.
const getDrogueriaSubtotal = (cart) => {
    const drogueriaProducts = cart.filter(product => product.category === 'Droguería');
    const drogueriaSubtotal = drogueriaProducts.reduce((subtotal, product) => subtotal + (product.price * product.units), 0);
    return drogueriaSubtotal.toFixed(2);
    };
    
console.log(getDrogueriaSubtotal(shoppingCart));

    console.log("----------17D-----------");
    // D.  Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
      
const getShoppingList = (cart) => {
    const sortedCart = cart.sort((a, b) => a.category > b.category ? 1 : -1);
    const formattedCart = sortedCart.map(product => console.log(product.product +
        ": Precio Total " + (product.price * product.units) + " €" ));
}
getShoppingList(shoppingCart);

  
    
    
    
    


