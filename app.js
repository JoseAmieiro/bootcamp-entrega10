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
    return first
}
console.log(head(collection2));

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

const swapFirstToLast = (collection) => {
    const [first, ...rest] = collection;
    const newArray = [...rest, first];
    return newArray;
}
console.log(swapFirstToLast(collection4));

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

const excludeId = (collection) => {
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

const concat = (...strings) => strings.reduce((acc, str) =>  acc + str + "|", "" );
console.log(concat("Jose", "Patri", "Luis"));

console.log("----------8-----------");
// 8. multArray
// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro 
// que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

const collection8 = [3, 7, 5, 6];
const multArray = (arr, x) => arr.map(num => num * x);
console.log(multArray(collection8, 5));

console.log("----------9-----------");
// 9. calcMult
// Implementa una función llamada calcMult que admita múltiples 
// números como argumento y devuelva como resultado el producto de todos ellos.

const calcMult = (...nums) => nums.reduce((acc,num) => acc * num, 1);
console.log(calcMult(1, 2, 3, 4));

console.log("----------EJERCICIOS EXTRA-----------");
console.log("----------10-----------");
// 10. swapFirstSecond
// Implementa una función swapFirstSecond tal que dado un array, 
// devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

const collection10 = [1, 2, 3, 4, 5, 6];

const swapFirstSecond = (collection) => {
    const [first, second, ...theRest] = collection;
    const result = [second, first, ...theRest];
    return result;
}
console.log(swapFirstSecond(collection10));

console.log("----------11-----------");
// 11. firstEqual
// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un 
// carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

const firstEqual = (char, ...strings) => strings.reduce((acc, str) => (str.charAt(0) === char)  ?  acc : false , true);

console.log(firstEqual("a", "amor", "asco", "bueno"));
console.log(firstEqual("a", "amor", "asco"));

console.log("----------12-----------");
// 12. longest
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
            //PREGUNTAR SI COMPARTEN MISMA LONGITUD

const longest = (...arrays) => arrays.reduce((a, b) => (a.length > b.length ? a : b));
console.log(longest([1], [1, 2], [1, 2, 3], [4, 5, 6], [-1, -2, -3])); // coge el ultimo mas largo, por qué?

console.log("----------13-----------");
//13. searchInStringV1
// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter,
// devuelva cuantas veces aparece dicho carácter en el string.

const searchInStringV1 = (str, char) => [...str].reduce((acc, currentChar) => 
    currentChar === char ? acc + 1 : acc, 0);
console.log(searchInStringV1("elemento", "e"));

console.log("----------14-----------");
// 14. searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2,
// encontrando otra alternativa sin usar reduce.

const searchInStringV2 = (str, char) => [...str].filter((c) => c === char).length;
console.log(searchInStringV2("espeso", "e"));

console.log("----------15-----------");
// 15. sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, 
// lo devuelva con sus letras ordenadas alfabéticamente.

const sortCharacters = (str) =>  newArray = str.split('').sort().join('');

console.log(sortCharacters("TODOS LOS DIAS"))
console.log(sortCharacters("¿cuanto más?CUANTO MAS$@€\(\/=ºª")); // PREGUNTAR ORDENACION ALFABETONUMERICASIGNOS EN EL STRING

console.log("----------16-----------");
// .16 shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, 
// devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

const shout = (...words) => words.reduce((result, word) => result + '¡' + word.toUpperCase() + '!', '');
console.log(shout("Hola", "Que", "tal"));

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
const addVat = (id, elements) => elements.map(element => ({...element, id}));
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
    const formattedCart = sortedCart.map(product => (product.product +
        ": Precio Total " + (product.price * product.units) + " €" ));
    return formattedCart
}
console.log(getShoppingList(shoppingCart).join('\n'));


    
    
    
    


