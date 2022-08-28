function pergarDados(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promessa.then( dadosChegaram ); // agenda a execucao de uma funcao quando a resposta chegar
    promessa.catch( deuErroConsultarmensagens );
}

pergarDados();
 
function dadosChegaram(resposta){ 

    console.log(resposta);
    console.log(resposta.data);
    

    mensagens = resposta.data;

    renderizarMensagens();
}


function renderizarMensagens(){
     const ul = document.querySelector('.content');

     ul.innerHTML = '';
 
     for(let i = 0; i < mensagens.length; i++){
        let type = mensagens[i].type;
        let destinatario = mensagens[i].to
        
         ul.innerHTML = ul.innerHTML + `
                <div class="message ${type}">
                <div class="time"><span>(${mensagens[i].time})</span></div>
                <div class="message-text-container">
                <span class="participante remetente">${mensagens[i].from}</span>
                <span class="to">para</span>
                <span class="participante destinatario">${destinatario}</span>
                <span>:</span>
                <span class="message-text">${mensagens[i].text}</span>
                </div>
            </div>
         `;
     }
}

function deuErroConsultarmensagens(erro){
    console.log(erro);
    alert('Algo deu errado! Não foi possível enviar a mensagem');
}
function deuErro(erro){
    console.log(erro);
    alert('Algo deu errado! Não foi possível enviar a mensagem');
}

function enviarMensagem(){
    const mensagem = document.querySelector('.campoMensagem');

    const  novaMensagem = {
        from: "joão",
        to: "Todos",
        text: mensagem.value,
        type: "message" 
    }
    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', novaMensagem); 
    promessa.then( pergarDados ); // se der certo
    promessa.catch( deuErro ); // se der erro

}