function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if(fano.value.length == 0|| fano.value > ano){
    window.alert ('Verifique os dados e tente novamente![ERRO]')
  }
  else{  
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number  (fano.value)
   var genero=''
   var img = document.createElement('img')
   img.setAttribute('id','f')
  }
if(fsex[0].checked){

   genero = "HOMEM"

        if(idade >= 0 && idade < 10){
          //criança
          img.setAttribute('src','fcrianca-h.png.png')
     } else if (idade < 21) {
          //jovem
          img.setAttribute('src','fjovem-h.png.png')
     } else if (idade < 50) {
           //adulto
           img.setAttribute('src','fadulto-h.png.png')
     } else {
           //idoso
           img.setAttribute('src','fidoso-h.png.png')
     }
} if (fsex[1].checked){

     genero = "MULHER"

         if(idade >= 0 && idade < 10){
           //criança
       img.setAttribute('src','fcrianca-m.png.png')
      } else if (idade < 21) {
           //jovem
           img.setAttribute('src','fjovem-m.png.png')
      } else if (idade < 50) {
            //adulto
            img.setAttribute('src','fadulto-m.png.png')
      } else {
            //idoso
            img.setAttribute('src','fidoso-m.png.png')
      }
}
   res.innerHTML =`Temos ${genero} com ${idade} anos`
   res.appendChild(img)
}