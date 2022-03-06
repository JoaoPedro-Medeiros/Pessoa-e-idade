function verify(){
    var dia = new Date()
    var year = dia.getFullYear()
    var formYear = document.getElementById('txt_ano')
    var res = document.querySelector('div#res')
    res.style.textAlign = 'center'

    if(formYear.value.length == 0 || Number(formYear.value) > year){
        window.alert('Informações INVÁLIDAS!')
    }else{
        var formSex = document.getElementsByName('rad_sex')
        var years = year - Number(formYear.value)
        var gender = ''
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')
        if(formSex[0].checked){
            gender = 'Homem'
            if(years >= 0 && years < 13){
                //Kid
                image.setAttribute('src', 'menino.jpg')
            }else if(years < 24){
                //Jovem
                image.setAttribute('src', 'homem-jovem.jpg')
            }else if(years < 55){
                //Adulto
                image.setAttribute('src', 'homem-adulto.jpg')
            }else{
                //Idoso
                image.setAttribute('src', 'idoso.jpg')
            }
        }else{
            gender = 'Mulher'
            if(years >= 0 && years < 13){
                //Kid
                image.setAttribute('src', 'menina.jpg')
            }else if(years < 24){
                //Jovem
                image.setAttribute('src', 'mulher-jovem.jpg')
            }else if(years < 55){
                //Adulto
                image.setAttribute('src', 'mulher-adulta.jpg')
            }else{
                //Idoso
                image.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Foi detectado ${gender} com ${years} anos de idade!`
        res.appendChild(image)
    }
}