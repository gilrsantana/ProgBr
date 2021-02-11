/* Tipos de dados em JavaScript
    Boolean
    Null
    Undefined
    Number
    String */



/* Trabalhando com arrays */
/*
// Array com string

var alunos = new Array("Gilmar", "Alex", "Priscila", "Kátia");

// Array com números
var matricula = [12, 15, 22, 30];

// Array com diferentes tipos
var conceito = new Array("Gilmar", 10, "Alex", null, "Priscila", undefined, "Kátia", false);

console.log(alunos);
console.log(matricula);
console.log(alunos + matricula);
console.log(conceito);

for(var i = 0; i < conceito.length; i++){
    console.log(conceito[i]);
}

// Forma mais simples de varrer o array em JS

for(var i in alunos){ //in busca o índice
    console.log(alunos[i]);
}

for(var aluno of alunos){ //of busca o elemento
    console.log(aluno);
}
*/

/* Trabalhando com funções */

function media(){
    var nota1 = 6.3;
    var nota2 = 8.9;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

media();

function media2(n1, n2){
    var media = (n1 + n2) / 2;
    return media;
}

var resultado1 = media2(9.3, 8.9);
var resultado2 = media2(9.9, 8);

console.log(resultado1 + " e " + resultado2);
