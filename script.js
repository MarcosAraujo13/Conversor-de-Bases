const selecao = document.getElementById("bases");
const numero = document.getElementById("numero");
const dica = document.getElementById("dica");
const destino = document.getElementById("destino");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

let baseAtual = parseInt(selecao.value);

const regras = {
    2:  { regex: /[^01]/g,        placeholder: "Ex: 1010", dica: "Apenas 0 e 1" },
    8:  { regex: /[^0-7]/g,       placeholder: "Ex: 755",  dica: "Dígitos de 0 a 7" },
    10: { regex: /[^0-9]/g,       placeholder: "Ex: 255",  dica: "Dígitos de 0 a 9" },
    16: { regex: /[^0-9a-fA-F]/g, placeholder: "Ex: 1A3F", dica: "Dígitos de 0 a 9 e letras de A a F" }
};

function atualizarInput() {
    const regra = regras[baseAtual];
    numero.value = "";
    numero.placeholder = regra.placeholder;
    dica.textContent = regra.dica;
}

numero.addEventListener("input", () => {
    numero.value = numero.value.replace(regras[baseAtual].regex, "");
    if (baseAtual === 16) {
        numero.value = numero.value.toUpperCase();
    }
});

selecao.addEventListener("change", () => {
    baseAtual = parseInt(selecao.value);
    atualizarInput();
});

atualizarInput(); // configura o input para a base inicial (decimal)

function converterBase() {
    const texto = numero.value;

    if (texto === "") {
        resultado.textContent = "Digite um número.";
        return;
    }

    const baseDestino = parseInt(destino.value);

    // texto na base de origem -> número
    const valor = parseInt(texto, baseAtual);

    // número -> texto na base de destino
    resultado.textContent = valor.toString(baseDestino).toUpperCase();
}

botao.addEventListener("click", converterBase);
    

