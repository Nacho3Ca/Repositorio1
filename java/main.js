 //funcion clásica
 function mostrar(){

   //(1) let mensaje = "inspeccionando consola"
   const d1 = document.getElementById("inp_nombre").value
   const d2 = document.getElementById("inp_apellido").value

    //const nombre = document.getElementById("inp_nombre").value
    //const apellido = document.getElementById("inp_apellido").value
    //const mensaje = nombre+', '+apellido //co¿oncadenado (nombre+', '+apellido) 

    const select = document.getElementById("slt_operacion").value

    let resultado = null
    if(select == 0){
        resultado = Number(d1) + Number(d2)
    }
    if(select == 1){                  // si es un solo = asigna, si son == compara
        resultado = d1 - d2
    }
    if(select == 2){
        resultado = d1 * d2 //producto
    }
    if(select == 3){
        resultado = d1 / d2
    }

    document.getElementById("h_resultado").textContent = resultado
    //alert(resultado)
    //console.log(mensaje)
}
const btn = document.getElementById("btn_aceptar")
btn.addEventListener("click",mostrar) // a la escucha de que cuando se aprete el click, ejecute mostrar

