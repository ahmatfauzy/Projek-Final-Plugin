"use strict";
function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
        console.log(' '.repeat(height - i) + '* '.repeat(i).trim());
    }
}
// Contoh penggunaan
const height = 10;
printTriangle(height);
// untuk run 
// npx tsc && node segitiga.js