var alunos = ["Melissa", "Bianca", "Raquel"];
var notaA = [6.5, 7.4, 8.0];
var notaB = [9.3, 7.0, 4.3];

function media(n1, n2){
    return (n1 + n2) / 2;
}

function passou(media){
    var resultado = "Reprovado";

    if(media >= 7.0){
        resultado = "Aprovado";
    }

    return resultado;
}

console.log("NOME - NOTA1 - NOTA2 - MÉDIA - SITUAÇÃO" )

for(var index in alunos){
    
    nota1 = notaA[index];
    nota2 = notaB[index];
    
    console.log(alunos[index] + " - " +
                nota1 + " - " + 
                nota2 + " - " + 
                media(nota1, nota2) + " - " + 
                passou(media(nota1, nota2) ) );
}