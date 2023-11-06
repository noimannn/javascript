// alert('Olá!')

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom DIA
        img.src = 'imagens/dia.png'
        document.body.style.background = '#73024B'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F2A766'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#732F48'
    }
}