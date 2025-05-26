const fs = require("fs");
const fsPromises = require("fs").promises;

// Assíncrono com callback
async function main(){
    const data = await fsPromises.readdir("./");
    console.log(data);
}main()


// Assíncrono com Promises (async/await)
fs.readdir("./", (err, data) => {
    if(err) throw err;
    console.log(data);
})

// Síncrono
const data = fs.readdirSync("./");
console.log(data);
