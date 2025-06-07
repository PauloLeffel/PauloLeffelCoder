function rolarDados() {
    const tipoDado = parseInt(prompt("Digite o tipo de dado (4, 6, 8, 10, 12, 20):"));

    if (isNaN(tipoDado) || ![4, 6, 8, 10, 12, 20].includes(tipoDado)) {
        alert("Você digitou um tipo de dado inválido.");
        return;
    }

    const usarVantagem = confirm("Você deseja jogar com VANTAGEM?");

    let resultado1 = Math.floor(Math.random() * tipoDado) + 1;
    let resultadoFinal;

    if (usarVantagem) {
        let resultado2 = Math.floor(Math.random() * tipoDado) + 1;
        resultadoFinal = Math.max(resultado1, resultado2);

        alert(`Você rolou com vantagem!\nPrimeiro dado: ${resultado1}\nSegundo dado: ${resultado2}\nResultado final (maior valor): ${resultadoFinal}`);
        console.log("Rolagem com vantagem:", resultado1, resultado2, "→ Resultado:", resultadoFinal);
    } else {
        resultadoFinal = resultado1;
        alert(`Você rolou normalmente e tirou: ${resultadoFinal}`);
        console.log("Rolagem normal:", resultadoFinal);
    }
}

const querJogar = confirm("Quer rolar os dados?");
if (querJogar) {
    rolarDados();
} else {
    alert("Ok, até a próxima!");
    console.log("Usuário optou por não jogar.");
}