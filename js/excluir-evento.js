window.onload = async () => {
    const formEvento = document.querySelector("form");
    const nomeEvento = document.getElementById("nome");
    const atracoesEvento = document.getElementById("atracoes");
    const descricaoEvento = document.getElementById("descricao");
    const dataEvento = document.getElementById("data");
    const lotacaoEvento = document.getElementById("lotacao");

    const params = new URLSearchParams(window.location.search);
    const response = await fetch(
        "https://soundgarden-api.vercel.app/events/" + params.get("id")
    );
    const data = await response.json();
    nomeEvento.value = data.name;
    atracoesEvento.value = data.attractions.toString().replace(",", ", ");
    descricaoEvento.value = data.description;
    dataEvento.value = data.scheduled;
    lotacaoEvento.value = data.number_tickets;
    formEvento.onsubmit = async (e) => {
        const options = {
            method: "DELETE",
        };
        e.preventDefault()
        const response = await fetch(
            "https://soundgarden-api.vercel.app/events/" + params.get("id"),
            options
        );
    };
};
