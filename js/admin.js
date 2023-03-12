const carregarEventos = async () => {
  const response = await fetch("https://soundgarden-api.vercel.app/events");
  const data = await response.json();
  const table = document.querySelector(".tabela-evento-body");
  for (let i = 0; i < data.length; i++) {
    const tr = createTableRow(data[i], i);
    table.appendChild(tr);
  }
};

function createTableRow(data, index) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const tdDate = document.createElement("td");
  const tdName = document.createElement("td");
  const tdAttractions = document.createElement("td");
  const tdActions = document.createElement("td");
  const buttonReservas = document.createElement("a");
  const buttonEdit = document.createElement("a");
  const buttonExclude = document.createElement("a");
  th.scope = "row";
  th.textContent = `${index + 1}`;
  tdDate.textContent = `${data.scheduled}`;
  tdName.textContent = `${data.name}`;
  tdAttractions.textContent = `${data.attractions
    .toString()
    .replaceAll(",", ", ")}`;
  buttonReservas.href = `reservas.html?id=${data._id}`;
  buttonReservas.classList.add("btn", "btn-dark");
  buttonReservas.textContent = "ver reservas";
  buttonEdit.href = `editar-evento.html?id=${data._id}`;
  buttonEdit.classList.add("btn", "btn-secondary");
  buttonEdit.textContent = "editar";
  buttonExclude.href = `excluir-evento.html?id=${data._id}`;
  buttonExclude.classList.add("btn", "btn-danger");
  buttonExclude.textContent = "excluir";
  tr.appendChild(th);
  tr.appendChild(tdDate);
  tr.appendChild(tdName);
  tr.appendChild(tdAttractions);
  tr.appendChild(tdActions);
  tdActions.appendChild(buttonReservas);
  tdActions.appendChild(buttonEdit);
  tdActions.appendChild(buttonExclude);
  return tr;
}

window.onload = () => {
  carregarEventos();
};
