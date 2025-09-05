const fs = require('fs');

function checkLinting() {
    console.log('Verificando estilo de código...');

    const files = ['index.js', 'test.js'];
    let errors = 0;

    files.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Verificaciones básicas
            if (content.includes('var ')) {
                console.log(`❌ ${file}: Usar 'const' o 'let' en lugar de 'var'`);
                errors++;
            } else {
                console.log(`✅ ${file}: No se encontraron problemas`);
            }
        }
    });
    
    if (errors === 0) {
        console.log('🎉 ¡Linting completado sin errores!');
    } else {
        console.log(`⚠️  Se encontraron ${errors} problemas de estilo`);
        process.exit(1);
    }
}

checkLinting();