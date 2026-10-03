/*DECLARAR LAS VARIABLES O CONSTANTES PARA MANIPULAR EL DOM
*/
const nro1 = document.getElementById("nro1");
const nro2 = document.getElementById("nro2");
const resultado = document.getElementById("resultado");

function Operaciones(){}


    if(nro1.values === "" || nro2.value === ""){
    resultado.textContent = "Concehtradito... necesitas dos numeros"
    }else{
        switch(operador){
            
            case "+": resultado.textContent = NUmber(nro1.value) + Number(nro2.value)
            case "-": resultado.textContent = NUmber(nro1.value) + Number(nro2.value)
            case "*": resultado.textContent = NUmber(nro1.value) + Number(nro2.value)
            case "/": resultado.textContent = NUmber(nro1.value) + Number(nro2.value)
            case "Cl": resultado.textContent = NUmber(nro1.value) + Number(nro2.value)

        }
    }
}