const { sumar, multiplicar, saludar, restar } = require("./index");

function runTests() {
    let passed = 0;
    let failed = 0;

    // Test 1: Sumar
    if (sumar(2, 3) === 5) {
        console.log('Test suma: PASO');
        passed++;
    } else {
        console.log('Test suma: FALLO');
        failed++;
    }

    // Test 2: Multplicar
    if (multiplicar(4, 5) === 20) {
        console.log('Test multiplicacion: PASO');
        passed++;
    } else {
        console.log('Test multiplicacion: FALLO');
        failed++;
    }

    // Test 3: Saludo
    if (saludar('Diego') === '¡Hola, Diego!') {
        console.log('Test saludo: PASO');
        passed++;
    } else {
        console.log('Test saludo: FALLO');
        failed++;
    }

    // Test 4: Restar
    if (restar(10, 5) === 5) {
        console.log('Test restar: PASO');
        passed++;
    } else {
        console.log('Test restar: FALLO');
        failed++;
    }

    // New test
    if (sumar(4, 5) === 9) {
        console.log('Test 2 suma: PASO');
        passed++;
    } else {
        console.log('Test 2 suma: FALLO');
        failed++;
    }

    console.log(`\nResultados: ${passed} pasaron, ${failed} fallaron`);

    if (failed > 0) {
        process.exit(1);
    }
}

runTests();