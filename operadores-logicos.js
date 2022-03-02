/*// Seção de Comandos, procedimento, funções, operadores, etc...
 passou := falso
//INPUTS
 escreval("Digite o nome do aluno:")
 leia(nome)

 escreval("Digite a nota 1 do aluno:")
 leia(nota1)

 escreval("Digite a nota 2 do aluno:")
 leia(nota2)

 //Operator

 media <- (nota1 + nota2) / 2

 //COMMAND
 se media >= 50 então
    passou := verdadeiro
 fimse
 
 //OPERACAO CONDICIONAL
 se (passou) && (media >= 50 || media <= 70) então
    escreval("Aprovado ", nome)
 senao
      escreval("Reprovado ", nome)
 fimse
*/

var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Qual o nome do aluno?")
nota1 = prompt("Qual e a primeira nota do aluno?")
nota2 = prompt("Qual a segunda nota do aluno?")

media = (parseInt(nota1) + parseInt(nota2)) / 2;
alert(media)

if (media >= 50)
    passou = true

if (passou && (media >= 70 && media <= 90))
    alert("Aprovado! " + nome)

else
    alert("Reprovado! " + nome)
