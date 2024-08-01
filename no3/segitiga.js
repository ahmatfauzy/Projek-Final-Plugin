"use strict";
function segitiga(height) {
    for (let i = 1; i <= height; i++) {
        console.log('* '.repeat(i).trim());
    }
}
const height = 3;
segitiga(height);
// untuk run
// npx tsc && node segitiga.js
