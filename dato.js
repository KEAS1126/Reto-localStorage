var txt = "";
var valoresMap = new Map();
var expReg= /\d/i;
var eliminar=document.querySelectorAll(".bto-eliminar");

function enviar() {
    txt = "";
    let cliente = document.getElementById("dato").value;
    let validacion = expReg.test(cliente);
    if(validacion===true){
        document.getElementById("validacion").innerHTML="Solo se permiten caracteres alfabeticos"
    } 
    else if (cliente===""){
        document.getElementById("validacion").innerHTML="Por favor Ingresar el nombre de una persona, el campo está vacio"

    }
    else{
            
        let clave_0 = Math.random().toString(36);
        let clave_1= Date.now().toString();
        let clave_2=clave_0+clave_1;
        let clave_3=clave_2.substring(2)
        localStorage.setItem(clave_3, cliente);
        for (let i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        valoresMap.set(clave, valor);
        }
        valoresMap.forEach((v,c) => listarMap(v,c))
        document.getElementById("listar").innerHTML = `${txt}`
        
    }

}

// function eliminarMap(clave) {
//     var bto = document.getElementById()

//         localStorage.removeItem(clave)
     
// }

function listarMap(valor, clave) {
    txt += `<li>${valor} </li> <button class="bto-eliminar" name="boton"  id="${clave}">eliminar</button>`;
}


