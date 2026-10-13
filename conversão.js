const produtos = [
  { id: 1, nome: "Mouse" },
  { id: 2, nome: "Teclado" },
  { id: 3, nome: "Monitor" }
];

const produtosPorId = {};  
for (const produto of produtos) {
    produtosPorId[produto.id] = produto;
}
console.log(produtosPorId);
