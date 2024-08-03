"use strict";
function segitiga(height) {
    for (let i = 1; i <= height; i++) {
        console.log('* '.repeat(i));
    }
}
const height = 10;
segitiga(height);
console.log("Tinggi segitiga adalah: ", height);
// untuk run
// npx tsc && node segitiga.js
