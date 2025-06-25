document.addEventListener("DOMContentLoaded", () => {
  const tipoDado = document.getElementById("tipoDado");
  const vantagem = document.getElementById("vantagem");
  const rolarBtn = document.getElementById("rolarBtn");
  const resultado = document.getElementById("resultado");
  const historicoBtn = document.getElementById("historicoBtn");
  const limparBtn = document.getElementById("limparHistoricoBtn");
  const historico = document.getElementById("historico");

  function rolarDado(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function salvarHistorico(texto) {
    let registros = JSON.parse(localStorage.getItem("historicoRolagens")) || [];
    registros.push(texto);
    localStorage.setItem("historicoRolagens", JSON.stringify(registros));
  }

  rolarBtn.addEventListener("click", () => {
    const dado = parseInt(tipoDado.value);
    const usarVantagem = vantagem.checked;
    const r1 = rolarDado(dado);
    let textoResultado = "";

    if (usarVantagem) {
      const r2 = rolarDado(dado);
      const maior = Math.max(r1, r2);
      textoResultado = `Rolagem com vantagem: ${r1} e ${r2} → Resultado: ${maior}`;
    } else {
      textoResultado = `Rolagem normal: ${r1}`;
    }

    resultado.innerText = textoResultado;
    salvarHistorico(textoResultado);
  });

  historicoBtn.addEventListener("click", () => {
    historico.innerHTML = "";
    const registros = JSON.parse(localStorage.getItem("historicoRolagens")) || [];

    registros.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      historico.appendChild(li);
    });
  });

  limparBtn.addEventListener("click", () => {
    localStorage.removeItem("historicoRolagens");
    historico.innerHTML = "";
    resultado.innerText = "";
  });
});