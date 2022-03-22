export function validar(input){
  const tipoDeInput = input.dataset.tipo;
  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input)
  }
  let enviarInput = document.querySelector('.enviar')

  if(input.validity.valid){
    input.parentElement.classList.remove("input__contacto-invalid");
    input.parentElement.querySelector('.input__contacto-error').innerHTML = "";
    enviarInput.disabled=false;
  }else{
    input.parentElement.classList.add("input__contacto-invalid");
    input.parentElement.querySelector('.input__contacto-error').innerHTML = mostrarMensajeError(tipoDeInput, input);
  }
}


const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajesError = {
  nombre: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch:"El nombre debe contener entre 3 y 50 caracteres"
  },
  email:{
    valueMissing: "Este campo no puede estar vacio",
    typeMismatch: "El correo no es valido"
  },
  asunto:{
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch:"El asunto debe contener entre 10 y 50 caracteres"
  },
  mensaje:{
    valueMissing: "Este campo no puede estar vacio",
    customError:"El mensaje debe contener entre 10 y 300 caracteres"
  },
}

function mostrarMensajeError(tipoDeInput,input){
  let mensaje = ''
  tipoDeErrores.forEach((error) => {
    if(input.validity[error]){
      mensaje = mensajesError[tipoDeInput][error];
    }
  });

  return mensaje 
}

const validadores = {
  mensaje: (input) => validarArea(input),
}

function validarArea(input){
  const texto = input.value.length
  let mensaje = '';
  if(texto != 0 && texto < 10 || texto >= 300){
    mensaje = 'El mensaje debe contener entre 10 y 300 caracteres'
  }
  input.setCustomValidity(mensaje)
}
