const botaoRegistrar = document.getElementById("botaoRegistrar");

if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", function () {
        const nomeVinho = prompt("Digite o nome do vinho:");
        const tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
        const safraVinho = Number(prompt("Digite a safra do vinho (ano):"));
        const quantidadeEstoque = Number(prompt("Digite a quantidade em estoque:"));

        alert("Cadastro realizado! Veja os detalhes no console.");
        alert("A seguir, veja os detalhes do vinho no console.");

        console.log("=== Detalhes do vinho ===");
        console.log("Nome do vinho:", nomeVinho);
        console.log("Tipo:", tipoVinho);
        console.log("Safra:", safraVinho);
        console.log("Quantidade em estoque:", quantidadeEstoque);
    });
}