const fsPromises = require('fs').promises;
const fs = require("fs");

// Assíncrono com callback
fs.readFile("arquivo.txt", "utf-8", (err, data) => {
    if (err) { throw err }
    console.log(data)
})

// Assíncrono com Promises (async/await)
async function main() {
    const data = await fsPromises.readFile("arquivo.txt", "utf-8")
    console.log(data)
} main()

//Síncrono
const data = fs.readFileSync("arquivo.txt", "utf-8")
console.log(data)
