const formEvento = document.querySelector("form");
const nomeEvento = document.getElementById("nome");
const bannerEvento = document.getElementById("banner");
const atracoesEvento = document.getElementById("atracoes");
const descricaoEvento = document.getElementById("descricao");
const dataEvento = document.getElementById("data");
const lotacaoEvento = document.getElementById("lotacao");
const params = new URLSearchParams(window.location.search);

window.onload = async () => {
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
  const options = {
    method: "DELETE",
  };
  try {
    const response = await fetch(
      `https://soundgarden-api.vercel.app/events/${params.get("id")}`,
      options
    );
    if (response.ok) {
      alert("Dados excluidos com sucesso")
      window.location.replace("./admin.html");
    }
  } catch (error) {
    console.log(error)
  }
};
