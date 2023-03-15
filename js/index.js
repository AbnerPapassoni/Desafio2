const container = document.getElementById("container-evento");

const carregarEventos = async () => {
  try {
    const response = await fetch("https://soundgarden-api.vercel.app/events");
    const data = await response.json();
    const primeirosEventos = data.slice(0, 3);

    primeirosEventos.forEach((evento) => {
      let dataEvento = new Date(evento.scheduled).toLocaleString();

      let html = `
            <article class="evento card p-5 m-3">
                <h2>${evento.name} - <br />${dataEvento}</h2>
                <h4>${evento.attractions}</h4>
                <p>${evento.description}</p>
                <button class="btn btn-primary" onclick='abrirModal(event)' id=${evento._id}>reservar Ingresso</button>
            </article>
            `;

      container.innerHTML += html;
    });
  } catch (error) {
    console.log(error);
  }
};

carregarEventos();

const modal = document.querySelector('#telaModal')

function abrirModal(event) {
  event.preventDefault();
  modal.style.display = 'block';
  modal.setAttribute('id_evento', event.target.id);
}

const mybutton = document.querySelector(".btn-primary");

mybutton.addEventListener("click", function(event) {
  abrirModalIndex(event);
});

const form = document.querySelector('#telaModal form')
form.addEventListener('submit', fazerReservaIngresso)

console.log(form);

async function fazerReservaIngresso(event) {
  console.log("teste");
  event.preventDefault();
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const ingressos = document.getElementById('qtdIngresso').value
  const id = modal.getAttribute('id_evento')

  const URL = 'https://soundgarden-api.vercel.app/bookings'

  const reserva = {
    owner_name: nome,
    owner_email: email,
    number_tickets: ingressos,
    event_id: id
  }

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(reserva)
    })

    if (response.ok) {
      alert('Reserva Efetuada! Aproveite seu evento!')
      window.location.replace("./index.html");
    } else {
      console.log(response)
      throw new Error(`${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (err) {
    if (err.message === '400') alert('Algo deu errado! Tente novamente!')
    console.log(err)
  }
}

const closeBtn = document.querySelector('#closeBtn')
closeBtn.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) modal.style.display = 'none'
}
