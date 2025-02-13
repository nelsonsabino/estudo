function verificarResposta(pergunta) {
  let respostaCorreta;
  switch (pergunta) {
    case 1:
      respostaCorreta = "b";
      break;
    // Adicione mais casos para as outras perguntas
  }

  const respostaSelecionada = document.querySelector(`input[name="resposta${pergunta}"]:checked`).value;
  const resultado = document.getElementById(`resultado${pergunta}`);

  if (respostaSelecionada === respostaCorreta) {
    resultado.textContent = "Resposta correta!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Resposta incorreta. Tente novamente.";
    resultado.style.color = "red";
  }
}
