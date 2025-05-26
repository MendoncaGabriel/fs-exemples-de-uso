const fs = require("fs");
const fsPromises = require("fs").promises;

// Assíncrono com callback
fs.unlink("saida0.txt", (err) => {
    if(err){
        console.error("Erro ao deletar arquivo: ", err)
        return
    }
    console.log("Arquivo deletado com callback!")
})

// Assíncrono com Promises (async/await)
async function main(){
    try {
        await fsPromises.unlink("saida1.txt")
    } catch (error) {
        console.error("Erro ao deletar arquivo", err)
    }
}main()

//Síncrono
fs.unlinkSync("saida2.txt")