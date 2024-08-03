function segitiga(height: number): void {
    for (let i = 1; i <= height; i++) {
        console.log('* '.repeat(i));
    }
}

const height = 10;
segitiga(height);

console.log("Tinggi segitiga adalah: ", height);



// untuk run
// npx tsc && node segitiga.js
