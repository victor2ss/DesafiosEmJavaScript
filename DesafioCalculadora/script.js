//Forma chumbada do valor

/*var nomeDoUsuario = "Victor";
var valorEmReal = 30;
var cotacaoDoEuro = 5.27;
var cotacaoDoBitcoin = 183497.5;

var valorEmEuro = valorEmReal * cotacaoDoEuro;

var valorEmRealBit = valorEmReal * cotacaoDoBitcoin;

valorEmEuro = valorEmEuro.toFixed(2);
valorEmRealBit = valorEmRealBit.toFixed(2);

alert(
  "Olá " +
    nomeDoUsuario +
    "! O valor de 30 reias em euros eh: R$ " +
    valorEmEuro +
    " e o " +
    "valor de 30 reais em bitcoin eh: R$ " +
    valorEmRealBit
);*/

//-------------------------------------------
//Forma para digitar o valor


// Definir as cotações das moedas
var cotacaoDoEuro = 5.50;
var cotacaoDoBitcoin = 200000.00;

// Obter o valor digitado
var valorReal = prompt("Digite o valor em reais:");

// Converter o valor para euros e bitcoins
var valorEmEuro = valorReal * cotacaoDoEuro;
var valorEmRealBit = valorReal * cotacaoDoBitcoin;

// Formatar os valores com duas casas decimais
valorEmEuro = valorEmEuro.toFixed(2);
valorEmRealBit = valorEmRealBit.toFixed(2);

// Gerar o resultado
var resultado = "O valor de " + valorReal + " reais em euros é: R$ " + valorEmEuro + " e o valor de " + valorReal + " reais em bitcoin é: R$ " + valorEmRealBit;

// Exibir o resultado
alert(resultado);
