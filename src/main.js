


import {readFile} from 'node:fs/promises';



async function main() 

{
    try {
let filePath = 'C:/Users/Shweta/Desktoop/New folder/Day9/package.json';
let  fileData = await readFile(filePath, {encoding: 'utf-8'});
console.log(fileData);
}catch (e){console.log("Exception Occured ", e.message);

}
}

main();