const dados = ["azul", "vermelho", "azul", "verde", "vermelho", "azul"];
const contagem = {};

for (const cor of dados) {
    contagem[cor] = (contagem[cor] || 0) + 1;
}

console.log(contagem);

// for (const cor of dados) { ... } percorre cada elemento do array dados.