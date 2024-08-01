function segitiga(height: number): void {
    for (let i = 1; i <= height; i++) {
        console.log('* '.repeat(i).trim());
    }
}

const height = 10;
segitiga(height);


// untuk run
// npx tsc && node segitiga.js
