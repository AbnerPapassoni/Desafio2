const container = document.getElementById("container-evento");

const carregarEventos = async () => {
  try {
    const response = await fetch("https://soundgarden-api.vercel.app/events");
    const data = await response.json();

    data.forEach((evento) => {
      let dataEvento = new Date(evento.scheduled).toLocaleString();

      let html = `
      <article class="evento card p-5 m-3">
        <h2>${evento.name} - <br />${dataEvento}</h2>
        <h4>${evento.attractions}</h4>
        <p>${evento.description}</p>
        <button class="btn btn-primary" id=${evento._id}>reservar Ingresso</button>
      </article>
      `;

      container.innerHTML += html;
    });
  } catch (error) {
    console.log(error);
  }
};

carregarEventos();
