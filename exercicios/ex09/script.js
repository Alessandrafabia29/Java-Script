

function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //hora atual
    //var hora = 18  //teste
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha_resized.png'
        document.body.style.background = '#F2BC79'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'tarde_resized.png'
        document.body.style.background = '#A64E1B'
    } else {
        //Boa noite!
        img.src = 'noite_resized.png'
        document.body.style.background = '#3C6373'
    }
}