"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.readFile("./src/data/simpleText", (error, data) => {
    if (error)
        throw error;
    console.log(data);
});
process.on("uncaughtException", (error, origin) => {
    fs.writeSync(process.stderr.fd, `Cought exception: ${error}\n` +
        `Exception origin: ${origin}\n`);
});
