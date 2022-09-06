// Node modules
import fs from "fs";
import path from "path";

fs
// Paths
const PATH_DATA = "./data/";


/**
 * Reads a text file
 */
function ReadTextFile(filePath: string, fileName: string) {
  const encoding = "utf8";
  const fullPath = path.join(__dirname, filePath, fileName);

  fs.readFile(fullPath, encoding,
    (error, data) => {
      if (error) throw error;
      console.log(data.toString());
  });
};

/**
 * Write a string to existing file
 */
function WriteToTextFile(filePath: string, fileName: string, text: string) {
  const fullPath = path.join(__dirname, filePath, fileName);

  fs.writeFile(fullPath, text,
    (error) => {
      if (error) throw error;
      console.log("Writing done");
  });
};

/**
 * Append, Create file
 */
function AppendTextToFile(filePath: string, fileName: string, text: string) {
  const fullPath = path.join(__dirname, filePath, fileName);

  fs.appendFile(fullPath, text,
    (error) => {
      if (error) throw error;
      console.log("Appending done");
  });
};


// Samples
ReadTextFile(PATH_DATA, "simpleText.txt");

const greeting = "Hi there and hello";
WriteToTextFile(PATH_DATA, "greeting.txt", greeting);

const appendText = "This text was appended";
AppendTextToFile(PATH_DATA, "greeting.txt", appendText);

const newText = "This file was created from scratch";
AppendTextToFile(PATH_DATA, "new.txt", newText);


// Error handling
process.on("uncaughtException", (error, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Cought exception: ${error}\n` +
    `Exception origin: ${origin}\n`
  );
});