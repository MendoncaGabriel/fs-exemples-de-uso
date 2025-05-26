const fs = require("fs");
const fsPromises = require("fs").promises;

// Assíncrono com callback
fs.appendFile("arquivo.txt", "\n- Assíncrono com Promises", (err) => {
    if (err) throw err;
    console.log("Conteudo adicionado!")
})

// Assíncrono com Promises (async/await)
async function main() {
    await fsPromises.appendFile("arquivo.txt", "\n- Assíncrono com callback");
} main()

//Síncrono
fs.appendFileSync("arquivo.txt", "\n- Síncrono")
