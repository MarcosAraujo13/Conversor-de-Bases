const selecao = document.getElementById("bases");

selecao.addEventListener("change", () => {
    const base = parseInt(selecao.value);
    console.log("Base escolhida:", base);
});