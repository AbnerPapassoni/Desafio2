const formEvento = document.querySelector("form");

formEvento.onsubmit = async (e) => {
  e.preventDefault();
  const nomeEvento = document.getElementById("nome").value;
  const bannerEvento = document.getElementById("banner").value;
  const atracoesEvento = document.getElementById("atracoes").value;
  const descricaoEvento = document.getElementById("descricao").value;
  const dataEvento = document.getElementById("data").value;
  const lotacaoEvento = document.getElementById("lotacao").value;

  let evento = {
    name: nomeEvento,
    poster: bannerEvento,
    attractions: [atracoesEvento],
    description: descricaoEvento,
    scheduled: dataEvento,
    number_tickets: lotacaoEvento,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(evento),
  };

  try {
    const response = await fetch(
      "https://soundgarden-api.vercel.app/events",
      options
    );
    if (response.ok){
      alert("Evento cadastrado com sucesso")
      window.location.replace("./admin.html");
    }  
  } catch (error) {
    console.log(error)
  }
};
