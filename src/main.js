

//how to read a file using Nodejs?
import { isUtf8 } from "node:buffer";
import { sum } from "./calc.js";

//how to read a file using Nodejs?
//this is an internal module
import {readFileSync} from "node:fs";


let filePath = "/Users/Shweta/Desktop/New folder/Day9/package.json"; 

let fileData = readFileSync(filePath ,{encoding: 'Utf-8'});
console.log(fileData);

