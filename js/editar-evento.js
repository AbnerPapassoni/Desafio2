const formEvento = document.querySelector("form");

const params = new URLSearchParams(window.location.search);

window.onload = async () => {
  let bannerEvento = document.getElementById("banner");
  let nomeEvento = document.getElementById("nome");
  let atracoesEvento = document.getElementById("atracoes");
  let descricaoEvento = document.getElementById("descricao");
  let dataEvento = document.getElementById("data");
  let lotacaoEvento = document.getElementById("lotacao");
  const response = await fetch(
    `https://soundgarden-api.vercel.app/events/${params.get("id")}`
  );
  const data = await response.json();
  nomeEvento.value = data.name;
  bannerEvento.value = data.poster;
  atracoesEvento.value = data.attractions.toString().replace(",", ", ");
  descricaoEvento.value = data.description;
  dataEvento.value = data.scheduled;
  lotacaoEvento.value = data.number_tickets;
};

formEvento.onsubmit = async (e) => {
  e.preventDefault();
  let bannerEvento = document.getElementById("banner").value;
  let nomeEvento = document.getElementById("nome").value;
  let atracoesEvento = document.getElementById("atracoes").value;
  let descricaoEvento = document.getElementById("descricao").value;
  let dataEvento = document.getElementById("data").value;
  let lotacaoEvento = document.getElementById("lotacao").value;

  let evento = {
    name: nomeEvento,
    poster: bannerEvento,
    attractions: [atracoesEvento],
    description: descricaoEvento,
    scheduled: dataEvento,
    number_tickets: lotacaoEvento,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(evento),
  };

  try {
    const response = await fetch(
      `https://soundgarden-api.vercel.app/events/${params.get("id")}`,
      options
    );
    if (response.ok) {
      alert("Dados editados com sucesso");
      window.location.replace("./admin.html");
    } else {
      alert(`Erro: ${response.status}, verifique os dados e tente novamente`);
    }
  } catch (error) {
    console.log(error);
  }
};
