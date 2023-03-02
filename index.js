const btnEl = document.getElementById("btn")
const imcInputEl = document.getElementById("imc-resultado")
const condicaoEl = document.getElementById("condicao")

function calcularIMC(){
    const alturaValor = document.getElementById("altura").value / 100;
    const pesoValor = document.getElementById("peso").value;

    const valorImc = pesoValor / (alturaValor * alturaValor);

    imcInputEl.value = valorImc;
    
    if(valorImc < 18.5){
     condicaoEl.innerText = "Baixo Peso"
    } else if(valorImc >= 18.5 && valorImc <= 24.99){
        condicaoEl.innerText = "Normal"
    } else if(valorImc >= 25 && valorImc <= 29.99){
        condicaoEl.innerText = "Sobrepeso"
    } else if(valorImc >= 30){
        condicaoEl.innerText = "Obeso"
    }
    }
    
     
btnEl.addEventListener("click", calcularIMC);