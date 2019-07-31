//variables
const presupuestoUser= prompt('Cual es tu presupuesto mensual');
const formulario= document.getElementById('agregar_gastos');
let cantidadPresupuesto;


//clases
/*Clase de presupuesto*/
class Presupuesto{
    
    constructor(presupuesto){
        this.presupuesto=Number(presupuesto);
        this.restante=Number(presupuesto);
    }

    //Metodo para ir restando del presupuesto actual
    presupuestoRestanteP(cantidad=0){
        return this.restante-=Number(cantidad);
    }

}

/*clase de inteface*/

class Interfaz{

    
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan =document.querySelector('span#restante');

        /* inserta al html*/
        presupuestoSpan.innerHTML=`${cantidad}`;
        restanteSpan.innerHTML=`${cantidad}`;
    }

    /*insertat los gastos a la lista y mostrarlos en el html*/
    agregarGastoListado(nombre,cantidad){

        /*query señector busca un id o una clase de nombre gastos y despues una etiqueta ul*/
        const gastoListado = document.querySelector('#gastos ul');

        /*crear un <li>*/
        const li = document.createElement('li');
        li.innerHTML=`
        ${nombre}
        $${cantidad}
        `;

        gastoListado.appendChild(li);

    }
    /*comprueba el presupuesto restante*/
    presupuestoRestante(cantidad){
        /*query señelector busca una etiqueta <span> con id restante */
        const restante = document.querySelector('span#restante');
        /*leer y actualizar el presupuesto restante*/

         const presupuestoRestanteUser = cantidadPresupuesto.presupuestoRestanteP(cantidad);
         restante.innerHTML=`${presupuestoRestanteUser}`
         

    }

}



//Event Listenner
document.addEventListener('DOMContentLoaded', function () {
if(presupuestoUser=== null||presupuestoUser===''){
    alert('agrega una cantidad en el presupuesto')
    window.location.reload();
}    else{

    //instancia la clase presupuesto

    /*crea un objeto con los atributos que contiene el contrucctor
    de la clase Presupuesto*/
   cantidadPresupuesto = new Presupuesto(presupuestoUser)
    
   //instancia la clase de interface

   const ui= new Interfaz();
   ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
   
    
}
    
});

formulario.addEventListener('submit',function(e) {
    e.preventDefault();

    /*leer del formulario*/
    
    const nombreGasto = document.getElementById('gasto').value;
    const cantidadGasto = document.getElementById('cantidad').value;

    /*instanciar la interface*/

    const ui= new Interfaz();

    /* comprobando si los campos estan vacios*/

    if(nombreGasto==''||cantidadGasto==''){
        alert('agregar datos de nombre y la cantidad del gasto');

    }else{
        alert('Gasto agregado correctamente');
        formulario.reset();

        /*mandar a la clase de interface como parametros el
         nombre y la cantidad de gasto para despues mostrar en el html*/
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);




    }
    
});