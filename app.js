const calculadora = document.getElementById("grid-calculadora");
const pantalla = document.getElementById("pantalla");
const boton0 = document.getElementById("boton-0");
const boton1 = document.getElementById("boton-1");
const boton2 = document.getElementById("boton-2");
const boton3 = document.getElementById("boton-3");
const boton4 = document.getElementById("boton-4");
const boton5 = document.getElementById("boton-5");
const boton6 = document.getElementById("boton-6");
const boton7 = document.getElementById("boton-7");
const boton8 = document.getElementById("boton-8");
const boton9 = document.getElementById("boton-9");
const botonComa = document.getElementById("boton-coma");
const botonSuma = document.getElementById("boton-suma");
const botonResta = document.getElementById("boton-resta");
const botonMult = document.getElementById("boton-mult");
const botonDivision = document.getElementById("boton-division");
const botonIgual = document.getElementById("boton-ig");
const botonDel = document.getElementById("boton-del");

let valor1;
let valor2;
let operador;
let limpiar = false;

function introducirNumero(numero) {
    if (limpiar == true) {
        limpiarPantalla();
        limpiar = false
    }
    pantalla.innerHTML += numero;
}

function introducirPunto() {
    if (limpiar == true) {
        limpiarPantalla();
        limpiar = false
    }

    if (! pantalla.innerHTML.includes('.')) pantalla.innerHTML += '.';
}

function limpiarPantalla() {
    pantalla.innerHTML = "";
}

function borrar() {
    limpiarPantalla()
    deseleccionarOperador()
    valor1 = undefined
    valor2 = undefined
    resultado = undefined
}

function borrarDigito() {
    pantalla.innerHTML = pantalla.innerHTML.slice(0,-1);
}

function invertirNumero() {
    if (limpiar == true) {
        limpiarPantalla();
        limpiar = false
    }
    if (! pantalla.innerHTML.includes('-')) {
        pantalla.innerHTML = '-' + pantalla.innerHTML
    } else {
        pantalla.innerHTML = pantalla.innerHTML.replace ("-", "")
    }
}

function guardarPantalla(variable) {
    console.log("guardando pantalla");
    variable = parseFloat(pantalla.innerHTML);
}

function deseleccionarOperador() {
    document.querySelectorAll("*").forEach((element) => {    
        element.classList.replace("btn-secondary", "btn-info");    
    });

    operador = "";
}

function elegirOperador(op) {
    console.log("eligiendo operador");
    valor1 = parseFloat(pantalla.innerHTML);
    console.log("valor1=" + valor1)
    limpiar = true

    deseleccionarOperador();

    operador = op;

    console.log(valor1, operador);


    switch (operador) {
        case "sumar":
            botonSuma.classList.replace("btn-info", "btn-secondary");
            break;
        case "restar":
            botonResta.classList.replace("btn-info", "btn-secondary");
            break;
        case "multiplicar":
            botonMult.classList.replace("btn-info", "btn-secondary");
            break;
        case "dividir":
            botonDivision.classList.replace("btn-info", "btn-secondary");
            break;

    }
}

function operar() {
    if (valor1 == undefined) return

    valor2 = parseInt(pantalla.innerHTML);
    console.log("valor2=" + valor2)
    limpiar = true

    switch (operador){
        case "sumar":
            resultado = valor1 + valor2;
            break;

        case "restar":
            resultado = valor1 - valor2;
            break;

        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        
        case "dividir":
            resultado = valor1 / valor2;
            break;
    }
    console.log("resultado=" + resultado)
    if (resultado != undefined) pantalla.innerHTML = resultado;

    deseleccionarOperador();
}

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            introducirNumero(event.key);
            break;
        case '.':
            introducirPunto();
            break;
        case '/':
            elegirOperador('dividir')
            break;
        case '*':
            elegirOperador('multiplicar')
            break;
        case '-':
            elegirOperador('restar')
            break;
        case '+':
            elegirOperador('sumar')
            break;
        case 'Enter':
            operar()
            break;
        case 'Backspace':
            borrarDigito()
            break;     
        case 'Delete':
            borrar()
            break;
    }
});
