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
