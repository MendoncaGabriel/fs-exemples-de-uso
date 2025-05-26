# 📂 Manipulando Arquivos e Diretórios no Node.js com FS

Este projeto tem como objetivo demonstrar como utilizar o módulo nativo `fs` do Node.js para realizar operações no sistema de arquivos, como criar, ler, atualizar, remover e monitorar arquivos e pastas.

---

## 🚀 Funcionalidades Implementadas

- ✅ Verificar se arquivos ou pastas existem
- ✅ Criar arquivos e diretórios
- ✅ Ler arquivos
- ✅ Escrever e atualizar arquivos
- ✅ Adicionar conteúdo a arquivos existentes
- ✅ Deletar arquivos
- ✅ Deletar diretórios (com conteúdos dentro)
- ✅ Renomear ou mover arquivos e pastas
- ✅ Copiar arquivos
- ✅ Trabalhar com **Streams** (para arquivos grandes)
- ✅ Monitorar arquivos e diretórios em tempo real (Watcher)

---

## 🛠️ Tecnologias e Ferramentas

- [Node.js](https://nodejs.org/)
- Módulo nativo [`fs`](https://nodejs.org/api/fs.html) (File System)
- Módulo [`fs/promises`](https://nodejs.org/api/fs.html#fspromisesapi)

---

## 📑 Conteúdos Abordados

### ✔️ Verificar se Arquivo ou Pasta Existe

```js
const fs = require('fs');

const exists = fs.existsSync('./caminho/arquivo.txt');
console.log('Existe?', exists);
