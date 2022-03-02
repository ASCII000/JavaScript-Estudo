function acaoBotao() {
    var numero, resultado
    numero = prompt("Digite o numero para contar o fatorial: ")
    resultado = 1

    for (var contador = 1; contador <= numero; contador++) {
        resultado = resultado * contador
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é " + resultado
}
