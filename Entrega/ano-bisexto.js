let ano = Number(prompt("Digite o ano: "));

if (ano % 100 != 0 && ano % 4 == 0 || ano % 400 == 0) {
    console.log("É um ano bissexto!");
} else {
    console.log("Não é um ano bissexto!")
}