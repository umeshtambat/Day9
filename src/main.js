

import { writeFile } from 'node:fs/promises';


async function main () {
    
let filePath = "C:/Users/Shweta/Desktop/New folder/Day9/output1.txt";
let fileData = `The optional options argument can be a string specifying an encoding, 
or an object with an encoding property specifying the character encoding to use for the link path returned. 
If the encoding is set to 'buffer', the link path returned will be passed as a <Buffer> object.`;
 await writeFile(filePath, fileData);
 console.log("success");
}



main();