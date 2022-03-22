import { validar } from "./validacion.js";

const inputs = document.querySelectorAll('input');
console.log(inputs)
const areatexto = document.querySelectorAll('textarea');
console.log(areatexto)



areatexto.forEach(input =>{
  input.addEventListener('blur',(input)=>{
    validar(input.target);
  })
})


inputs.forEach(input =>{
  input.addEventListener('blur',(input)=>{
    validar(input.target);
  });
});