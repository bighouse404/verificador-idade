function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txt_ano')
    var res = document.getElementById('res')

    if (f_ano.value.length == 0 || f_ano.value > ano){
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            //Homem
            genero = 'Homem'

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/bebe_m.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', './img/jovem_m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', './img/adulto_m.png')
            } else {
                //Idoso
                img.setAttribute('src', './img/idoso_m.png')
            }
        } else if (fsex[1].checked){
            //Mulher
            genero = 'Mulher'

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/bebe_f.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', './img/jovem_f.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', './img/adulto_f.png')
            } else {
                //Idoso
                img.setAttribute('src', './img/idoso_f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    
    }
}