const fs = require("fs");
const fsPromises = require("fs").promises;

// Assíncrono com callback
fs.rm('Assíncrono com callback', { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('Erro ao remover diretório:', err);
    return;
  }
  console.log('Diretório removido com callback!');
});

// Assíncrono com Promises
async function removerComPromise() {
  try {
    await fsPromises.rm('Assíncrono com Promises', { recursive: true, force: true });
    console.log('Diretório removido com Promise!');
  } catch (err) {
    console.error('Erro ao remover diretório:', err);
  }
}

removerComPromise();


// Síncrono
try {
  fs.rmSync('Síncrono', { recursive: true, force: true });
  console.log('Diretório removido de forma síncrona!');
} catch (err) {
  console.error('Erro ao remover diretório:', err);
}

