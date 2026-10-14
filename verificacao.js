const identificacao = { nome: "Juliana",
    idade: 16 ,
    cidade: "Curutiba"
};
console.log(identificacao["nome"]); 

//"nome" in.. verifica se "nome" existe no objeto ident. E tem q retornar vdd ou falso.
//se retirar o ("nome" in identificacao); e mudar para identificacao["nome"]); da para combar ele com outras coisas, n retorna true ou false, mas sim o valor que está dentro do objeto.