/*
// Seção de Declarações das variáveis 
 nome: caractere
 numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreval("Digite o nome: ")
leia(nome)

escreval("Digite o numero:")
leia(numero)

//CONTATENACAO (,)
escreval(nome," : ",numero, 15)
*/

var nome, numero;

nome = prompt("Digite o nome: ")
numero = prompt("Digite o seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero