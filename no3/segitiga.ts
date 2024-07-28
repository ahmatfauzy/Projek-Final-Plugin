function printTriangle(height: number): void {
    for (let i = 1; i <= height; i++) {
        console.log(' '.repeat(height - i) + '* '.repeat(i).trim());
    }
}

const height = 10;
printTriangle(height);



// untuk run 
// npx tsc && node segitiga.js
