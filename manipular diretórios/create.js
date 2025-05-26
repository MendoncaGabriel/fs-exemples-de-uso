const fs = require("fs");
const fsPromises = require("fs").promises;

// Assíncrono com Promises
async function main(){
    await fsPromises.mkdir("Assíncrono com callback", {recursive: true})
}main()

// Assíncrono com callback
fs.mkdir("Assíncrono com Promises", { recursive: true}, (err) => {
    if(err) throw err;
    console.log("Diretório criado!")
})

// Síncrono
fs.mkdirSync("Síncrono")

