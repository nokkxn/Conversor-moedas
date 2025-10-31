document.getElementById("converter").addEventListener("click", async function() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;

  if (isNaN(valor)) {
    alert("Digite um valor válido!");
    return;
  }

  try {
    const resposta = await fetch(`https://open.er-api.com/v6/latest/${de}`);
    const data = await resposta.json();

    if (!data || !data.rates || !data.rates[para]) {
      throw new Error("Erro ao buscar taxa de câmbio");
    }

    const taxa = data.rates[para];
    const convertido = (valor * taxa).toFixed(2);

    document.getElementById("resultado").textContent = `${valor} ${de} = ${convertido} ${para}`;
  } catch (erro) {
    console.error(erro);
    alert("Erro ao converter. Tente novamente.");
  }
});
