// Estas variables almacenan el estado actual de la calculadora.

//guarda el número que se está ingresando actualmente.
let currentInput = ''; 

//guarda el número que se ingresó antes de elegir una operación.
let previousInput = ''; 

//guarda la operación matemática seleccionada (+, -, *, /).
let operation = undefined; 

// La función appendNumber se llama cada vez que se presiona un número en la calculadora.
// Agrega el número presionado al final del número actual y actualiza la pantalla.
function appendNumber(number) {
    currentInput += number; // Concatenamos el número presionado al final del número actual.
    updateDisplay(); // Llamamos a la función que actualiza lo que se muestra en la pantalla.
}

// La función chooseOperation se llama cuando se selecciona una operación (+, -, *, /).
// Guarda la operación seleccionada y prepara los números para el cálculo.
function chooseOperation(op) {
    if (currentInput === '') return; // Si no se ha ingresado ningún número, no hacemos nada.
    if (previousInput !== '') { 
        // Si ya se había ingresado un número y se seleccionó otra operación, primero calculamos el resultado anterior.
        calculate();
    }
    operation = op; // Guardamos la operación seleccionada (e.g., +, -, *, /).
    previousInput = currentInput; // Guardamos el número actual en previousInput.
    currentInput = ''; // Limpiamos currentInput para que el usuario pueda ingresar un nuevo número.
}

// La función calculate realiza el cálculo basado en la operación seleccionada.
function calculate() {
    let computation; // Esta variable almacenará el resultado del cálculo.
    const prev = parseFloat(previousInput); // Convertimos el número previo a un número decimal (flotante).
    const current = parseFloat(currentInput); // Convertimos el número actual a un número decimal (flotante).
    if (isNaN(prev) || isNaN(current)) return; // Si alguno de los números no es un número válido, no hacemos nada.

    // Usamos un switch para determinar qué operación se debe realizar.
    switch (operation) {
        case '+':
            computation = prev + current; // Si la operación es suma, sumamos los dos números.
            break;
        case '-':
            computation = prev - current; // Si la operación es resta, restamos current de prev.
            break;
        case '*':
            computation = prev * current; // Si la operación es multiplicación, multiplicamos los dos números.
            break;
        case '/':
            computation = prev / current; // Si la operación es división, dividimos prev entre current.
            break;
        default:
            return; // Si no hay una operación válida, no hacemos nada.
    }
    currentInput = computation; // Guardamos el resultado en currentInput para mostrarlo.
    operation = undefined; // Limpiamos la operación, ya que el cálculo está hecho.
    previousInput = ''; // Limpiamos previousInput para que esté listo para el próximo cálculo.
    updateDisplay(); // Actualizamos la pantalla con el resultado.
}

// La función clearDisplay se llama cuando se presiona el botón de "C" (Clear).
// Limpia todas las variables y actualiza la pantalla.
function clearDisplay() {
    currentInput = ''; // Limpiamos el número actual.
    previousInput = ''; // Limpiamos el número previo.
    operation = undefined; // Limpiamos la operación seleccionada.
    updateDisplay(); // Actualizamos la pantalla para reflejar que todo está limpio.
}

// La función updateDisplay actualiza lo que se muestra en la pantalla de la calculadora.
function updateDisplay() {
    document.getElementById('display').value = currentInput; // Mostramos el número actual en la pantalla.
}
