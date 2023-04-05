AOS.init();

const dataDoEvento = new Date("jul 17, 2023 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function (){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampAtual

    const mesEmMs = 1000 * 60 * 60 * 24 * 30
    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60
    const segundosEmMs = 1000
  
    

    const mesesAteOEvento = Math.floor(tempoAteOEvento/ mesEmMs);
    const diasAteOEvento = Math.floor(tempoAteOEvento % mesEmMs / diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs)/horaEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / segundosEmMs);


    if (mesesAteOEvento <=1 ) {
        var mes = 'Mês'
    } else {
        var mes = 'Meses'
    } 

    if (diasAteOEvento <=1 ) {
        var dia = 'dia'
    } else {
        var dia = 'dias'
    } 

    if (horasAteOEvento <=1 ) {
        var hora = 'hora'
    } else {
        var hora = 'horas'
    } 
    document.getElementById(`niver`).innerHTML = `${mesesAteOEvento} ${mes} ${diasAteOEvento} ${dia} ${horasAteOEvento} ${hora} ${minutosAteOEvento} m ${segundosAteOEvento} s `


    if(diasAteOEvento < 0) {
        clearInterval (contaAsHoras);
        document.getElementById(`niver`).innerHTML = `Evento ja foi agora só ano que vem!`
    }

    
},1000);
