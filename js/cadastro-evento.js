window.onload = () => {
  const formEvento = document.querySelector("form");
  
  formEvento.onsubmit = async () => {
    const nomeEvento = document.getElementById("nome").value;
    const atracoesEvento = document.getElementById("atracoes").value;
    const descricaoEvento = document.getElementById("descricao").value;
    const dataEvento = document.getElementById("data").value;
    const lotacaoEvento = document.getElementById("lotacao").value;
    
    const evento = {
      "name": nomeEvento,
      "attractions": [atracoesEvento],
      "description": descricaoEvento,
      "scheduled": dataEvento,
      "number_tickets": lotacaoEvento
    };
    
    const options = {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(evento)
    }
    
    const response = await fetch('https://soundgarden-api.vercel.app/events', options)
    const data = await response.json()
    console.log(data)
  };
};
