const usuarios = [
{ nome: "Ana", idade: 17 },
{ nome: "Carlos", idade: 20 },
{ nome: "João", idade: 15 },
{ nome: "Marina", idade: 22 }];

const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);
console.log(maioresDeIdade);