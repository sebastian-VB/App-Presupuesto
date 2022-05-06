
export const campos = {
    usuario: false,
    nombre: false,
}


export const validarCampo = (expresion, inputValue, inputName)=>{
    
    if(expresion.test(inputValue.value)){
        document.getElementById(`grupo__${inputName}`).classList.remove('right__form-input-incorrecto');
        document.getElementById(`grupo__${inputName}`).classList.add('right__form-input-correcto');
        document.querySelector(`#grupo__${inputName} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${inputName} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${inputName} .container__right-warning`).classList.remove('container__right-warning-activo');
        campos[inputName] = true;
    }
    else{
        document.getElementById(`grupo__${inputName}`).classList.remove('right__form-input-correcto');
        document.getElementById(`grupo__${inputName}`).classList.add('right__form-input-incorrecto');
        document.querySelector(`#grupo__${inputName} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${inputName} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${inputName} .container__right-warning`).classList.add('container__right-warning-activo');
        campos[inputName] = false;
    }
}