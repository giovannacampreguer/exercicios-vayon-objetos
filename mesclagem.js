const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const combinacaoObj = { ...obj1, ...obj2 };
console.log(combinacaoObj); 

// ...object combina os objetos obj1 e obj2 em um novo objeto combinacaoObj.