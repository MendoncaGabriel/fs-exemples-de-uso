const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

async function main() {
  const filePath = "./arquivoExtra.txt";
  const newFilePath = "./manipular diretórios/create2.js";

  // ✅ Verificar se arquivo existe (sincrono)
  const fileExist = fs.existsSync(filePath);
  console.log("Arquivo existe?", fileExist);

  // ✅ Renomear (ou mover)
  if (fileExist) {
    await fsPromises.rename(filePath, newFilePath);
    console.log("Arquivo renomeado com sucesso!");
  }

  // ✅ Copiar arquivo
  await fsPromises.copyFile(newFilePath, "./manipular diretórios/copia.js");
  console.log("Arquivo copiado!");

  // ✅ Usando Stream (leitura + escrita)
  const readStream = fs.createReadStream(newFilePath, { encoding: "utf8" });
  const writeStream = fs.createWriteStream("./manipular diretórios/streamOutput.js");

  readStream.on("data", (chunk) => {
    console.log("Lendo chunk:", chunk);
    writeStream.write(chunk);
  });

  readStream.on("end", () => {
    console.log("Stream finalizada!");
    writeStream.end();
  });

  // ✅ Monitorar alterações no arquivo ou pasta
  const watcher = fs.watch(filePath, (eventType, filename) => {
    if (filename) {
      console.log(`O arquivo ${filename} teve uma alteração: ${eventType}`);
    }
  });

  // Encerrar o watcher após 15 segundos (apenas exemplo)
  setTimeout(() => {
    watcher.close();
    console.log("Parou de monitorar alterações.");
  }, 45000);
}

main();
