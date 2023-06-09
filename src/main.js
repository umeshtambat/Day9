

//how to read a file using Nodejs?
import { isUtf8 } from "node:buffer";
import { sum } from "./calc.js";

//how to write a file using Nodejs?
//this is an internal module
import {readFileSync, writeFileSync} from "node:fs";


let filePath = "/Users/Shweta/Desktop/New folder/Day9/output.txt"; 

let data = `Directory entries returned by this function are in no particular order 
as provided by the operating system's underlying directory mechanisms. 
Entries added or removed while iterating over the directory might not be included in the iteration results.`;
writeFileSync(filePath,data);
console.log("Write Success");

