function acaoBotao() {
    var nome, limite, idade, contador;

    limite = prompt("Digite a quantidade de pessoas para verificacao: ")
    contador = 0

    while (contador < limite) {
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do(a) " + nome)
        if (idade > 17)
            document.getElementById("paragrafo").innerText = nome + " é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " é menor de idade "
        contador++
    }
}