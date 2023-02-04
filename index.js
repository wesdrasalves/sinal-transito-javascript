let sinalLiberado = false
const luzVerde = document.querySelector('#verde')
const luzAmarela = document.querySelector('#amarelo')
const luzVermelha = document.querySelector('#vermelho')
const tempoSinal = 3000

function instalarSinal(){
    agendarMudancadeSinal()
}

function atualizaLuz(luzEscolhida){
    luzAmarela.dataset.inativo = true
    luzVerde.dataset.inativo = true
    luzVermelha.dataset.inativo = true

    delete luzEscolhida.dataset.inativo;
}


function agendarMudancadeSinal(){
    const luzEscolhida = sinalLiberado? luzVerde: luzVermelha;
    atualizaLuz(luzEscolhida)
    console.log(sinalLiberado)

    setTimeout(() => {

        let tempoTrocaSinal = 0
        if(sinalLiberado){
            luzVerde.dataset.inativo = true
            delete luzAmarela.dataset.inativo
            tempoTrocaSinal = 1000
        }   
    
        setTimeout(() => {
            sinalLiberado = !sinalLiberado;
            agendarMudancadeSinal()
        }, tempoTrocaSinal)
        
    },tempoSinal)
}

window.addEventListener('load', instalarSinal)