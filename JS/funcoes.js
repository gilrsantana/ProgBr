function media(n1, n2){
    return (n1 + n2) / 2;
}

var resultado1 = media(8.6, 8);
var resultado2 = media(9, 7.9);

console.log(resultado1 + " e " + resultado2);

// Uma variável pode receber uma função como valor

var calc = media // sem os parenteses e parâmetros
var resultado3 = calc(9, 5);
console.log(resultado3);
console.log(calc(8, 10));

// Função anônima

var valor = function(n1, n2){
    return (n1 + n2) / 2;
}

console.log(valor(7, 2));

// Arrow function

var media = (n1, n2) => {
    return (n1 + n2) / 2;
}

console.log(media(8.5, 7.2));