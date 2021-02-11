var alunos = new Array("Bianca","Raquel","Vanessa","Michele","Fábio");
// ou pode ser declarado assim:

var convidados = ["Anderson","Bruno","Érica","Luana","Vivian"];


for(var i = 0; i < convidados.length; i++){
    console.log(convidados[i]);
}
console.log("");
// Condensando o código
for(var i in alunos){
    console.log(alunos[i]);
}
console.log("");
// Condensando mais ainda
for(var aluno of alunos){
    console.log(aluno);
}