
import {campos, validarCampo} from './validarCamposInputs.js';
import { saveData, deleteData } from './informacionPersona.js';

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

deleteData();


const expressions = {
    user: /^[a-zA-Z0-9\_\-]{1,25}$/,
    nameU: /^[a-zA-Z\ ]{1,30}$/,
}

const validateForm = (e)=>{
    
    switch(e.target.name){

        case "usuario":
            validarCampo(expressions.user, e.target, e.target.name);
        break;
        case "nombre":
            validarCampo(expressions.nameU, e.target, e.target.name);
        break;
    }
}

//añadir eventos a cada input del formulairo, iterando la lista de inputs
inputs.forEach((input)=>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


formulario.addEventListener('submit', (e)=>{

    e.preventDefault();

    if(campos.usuario && campos.nombre){
        saveData(inputs[0].value, inputs[1].value);
        window.location.assign('../main.html');
    }

});


