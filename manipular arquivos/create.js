const fs = require("fs");
const fsPromises = require("fs").promises;

// Assíncrono com callback
fs.writeFile("saida0.txt", "Conteudo aqui", (err) => {
    if(err) throw err;
    console.log("Arquivo salvo");
});

// Assíncrono com Promises
async function main(){
    await fsPromises.writeFile("saida1.txt", "conteudo aqui")
    console.log("Arquivo salvo!")
}main()


// Síncrono
fs.writeFileSync("saida2.txt", "Conteúdo aqui")