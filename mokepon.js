
const sectionAtaque=document.getElementById ('seleccionar-ataque')   

const sectionReiniciar=document.getElementById('reiniciar')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')

const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota=document.getElementById('selecionar-mascota')
const inputhipodogue = document.getElementById('hipodogue')
const inputcapipepo = document.getElementById('capipepo')
const inputratigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const  spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador=document.getElementById('vidas-jugador')
const spanVidasEnemigo=document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador=document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo= document.getElementById('ataque-del-enemigo')

const sectionSeleccionarAtaque = document.getElementById ('seleccionar ataque')

const seccionMensajes= document.getElementById('mensaje')

const cotenedordetarjeta= doument.getElementById ('contenedordetarjeta')
        


let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3
let opcionDeMokepones
let mokepones=[]

 

class Mokepon {   
      
      constructor(nombre,foto,vida) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
      }

             
}

let hipodogue = new Mokepon (`hipodogue`,`./imagenes/hipodogue/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197.webp "alt="Hipodogue">`, 5
  )

let capipepo = new Mokepon (`capipepo`, `./imagenes/hipodogue/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197.webp "alt="Hipodogue"> `, 5)


let ratigueya = new Mokepon ('ratigueya','./imagenes/hipodogue/ratigueya/capipepo/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197 (1).webp"alt="Capipepo"> ',5)  

mokepones.push[ hipodogue,capipepo,ratigueya]

function iniciarJuego() {  

  
  
  sectionAtaque.style.display="none"

  mokepones.forEach ( (mokepon)=>   { 
     opcionDeMokepones='<input  type ="radio" name="mascotas" id=${mokepon.nombre}/>
                
     <label class="tarjeta-mokepon" for=${mokepon.nombre}> 
       <p> ${mokepon.nombre}</p>
    
       <img src=${mokepon.foto} alt=${mokepon.nombre}>
       
     </label> '} )

  contenedortarjetas.innerHTML+= opcionDeMokepones
   
    sectionReiniciar.style.display="none"



  
  botonFuego.addEventListener('click', ataqueFuego)

  
  botonAgua.addEventListener('click', ataqueAgua)

  
  botonTierra.addEventListener('click', ataqueTierra)

  
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

  
  botonReiniciar.addEventListener('click', reiniciarJuego)
 }

  function seleccionarMascotaJugador() {

   
    sectionSeleccionarMascota.style.display="none"
    
    sectionAtaque.style.display="flex"

    
    if (inputhipodogue.checked) {
      spanMascotaJugador.innerHTML = inputhipodogue.id

    } else if (inputcapipepo.checked) {
      spanMascotaJugador.innerHTML = inputcapipepo.id

    } else if (inputratigueya.checked) {
      spanMascotaJugador.innerHTML = inputratigueya.id


    } else {

      alert("selecciona una mascota")
    }

    seleccionarMascotaEnemigo()  
      
                  
  }

      
  


  
  function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio (0,mokepones.lenght-1)
   
         
   
      spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
    
      
    
      
    


  }




  function ataqueFuego() {
    ataqueJugador ='fuego'
    ataqueAleatorioEnemigo()
  }

  function ataqueAgua() {
    ataqueJugador ='agua'
    ataqueAleatorioEnemigo()


  }
  function ataqueTierra() {
    ataqueJugador ='tierra'
    ataqueAleatorioEnemigo()

  }

  function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
      ataqueEnemigo = 'fuego'

    } else if (ataqueAleatorio == 2) {
      ataqueEnemigo = 'agua'

    } else {
      ataqueEnemigo = 'tierra'
    }




    combate()

  }

  function combate() { 
   

    

     
    
    if (ataqueEnemigo == ataqueJugador) {
      crearMensaje('empate')

    } else if (ataqueJugador == 'fuego' && ataqueEnemigo == 'tierra') {
      crearMensaje('ganaste')
      vidasEnemigo--
      spanVidasEnemigo.innerHTML= vidasEnemigo

      


    } else if (ataqueJugador == 'agua' && ataqueEnemigo == 'fuego') {
      crearMensaje('ganaste')
       vidasEnemigo--
       spanVidasEnemigo.innerHTML= vidasEnemigo

    } else if (ataqueJugador == 'tierra' && ataqueEnemigo == 'agua') {
      crearMensaje('ganaste') 
       
       revisarResultado()
      
      vidasEnemigo--
      spanVidasEnemigo.innerHTML= vidasEnemigo
         
    } else  {
      crearMensaje('perdiste') 
       vidasJugador--
       spanVidasJugador.innerHTML= vidasJugador

         revisarResultado()
         

    }

      
 }



    function crearMensaje(resultado) {
                
      
      let nuevoAtaqueJugador= document.createComment('p')
      let nuevoAtaqueEnemigo= document.createElement('p')

       sectionMensajes.innerHTML=resultado
       nuevoAtaqueJugador.innerHTML =ataqueJugador
       nuevoAtaqueEnemigo.innerHTML= ataqueEnemigo



     // let parrafo = document.createElement('p')
     //  parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + 'la mascota del enemigo ataco con ' + ataqueEnemigo +' ' +resultado
      
      ataqueDelJugador.appendChild(nuevoAtaqueJugador)
      ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

    }

    
    function crearMensajefinal()  { 

      sectionSeleccionarAtaque.style.display= "none" 
  


      

       
      let parrafo= document.createElement('p') 

      parrafo.innerHTML = "tu mascota  <span id='mascota-jugador' ></span> tiene <span>'+ vidasJugador +'</span> vidas" 
       "la mascota  <span id='mascota-enemigo'></span> del enemigo tiene <span>'vidasEnemigo'</span>vidas" 
    } 

       function revisarResultado() {  

        if (vidasJugador== 0 ) {
             crearMensajeResultado('perdiste lo siento')

        } else if (vidasEnemigo==0) { 
            
             crearMensajeResultado('ganaste felicitaciones')
        }

    
       }
    function crearMensajeResultado(resultadoFinal)  { 

     
      
    
      sectionReiniciar.style.display="block"
  



      let parrafo = document.createElement('p')


      parrafo.innerHTML = resultadoFinal
      sectionMensajes.appendChild(parrafo)

     
      botonFuego.disabled=true
      
    
    
      botonAgua.disabled=true
      
    
      
      botonTierra.disabled=true
      
     

    } 
      
      
    function reiniciarJuego () {
      
         location.reload()
         
        }
       
          
    
 function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)


   }

  


 alert("hola")


  window.addEventListener('load', iniciarJuego)

