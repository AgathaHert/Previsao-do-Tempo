function pegarCidade() {
  const cidade = document.querySelector("input").value;

  buscarCidade(cidade);
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=7e65896062c572c96c25f8c432323e47" +
      "&lang=pt_br&units=metric"
  ).then((response) => response.json());

  mostrarDados(dados);
}

function mostrarDados(dados) {
  document.querySelector(".caixa-media .temp").innerHTML =
    Math.round(dados.main.temp) + "°C";

  document.querySelector(".caixa-media .umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";

  document.querySelector(".caixa-media .icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

  document.querySelector(".caixa-media .descricao").innerHTML =
    dados.weather[0].description;

  document.querySelector(".caixa-media .cidade").innerHTML =
    "Tempo em " + dados.name;
}
