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
            
        let ramdom = Math.round(Math.random()*1000)
        localStorage.setItem(ramdom, cliente);
        for (let i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        valoresMap.set(clave, valor);
        }
        valoresMap.forEach((v,c) => listarMap(v,c))
        document.getElementById("listar").innerHTML = `${txt}`
        
    }

}

function eliminarMap(clave) {
    localStorage.removeItem(clave)
}

function listarMap(valor, clave) {
    txt += `<li>${valor} </li> <button class="bto-eliminar"  id="${clave}">eliminar</button>`;
}












