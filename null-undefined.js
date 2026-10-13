const dados = {
nome: "Carlos",
idade: null,
email: "carlos@email.com",
telefone: undefined
};

const dadosFiltrados = Object.fromEntries(
    Object.entries(dados).filter(([chave, valor]) => valor !== null && valor !== undefined)
);
console.log(dadosFiltrados);


//Object.entries(dados) retorna um array de pares [chave, valor] do objeto dados.
//chave: nome e valor: Carlos

// valor !== null : n pd ser null
// && : e
// valor !== undefined : n pd ser undefined