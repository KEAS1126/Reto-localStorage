var txt = "";
var valoresMap = new Map();
// var key = ''
var expReg= /\d/i;



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
            
        let ramdom = Math.random(1000)
        localStorage.setItem(ramdom, cliente);
        for (let i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        valoresMap.set(clave, valor);
        }
        valoresMap.forEach((v,k) => listarMap(k, v))
        document.getElementById("listar").innerHTML = `${txt}`
        
    }

}


function listarMap(clave, valor) {
    txt += `<li>${valor} </li>
    <button type="button" onclick="eliminarMap(clave)" class="bto-eliminar">Eliminar</button>`;
}

// function eliminarMap(clave) {
//     localStorage.removeItem(clave);
//     valores.forEach(listar);
//     document.getElementById("listar").innerHTML = `${txt}`
// }







