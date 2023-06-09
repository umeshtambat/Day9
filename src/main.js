

// 
async function sum(n1, n2){
    return (n1 + n2);
}

 async function main() {
let output =  await sum(10,20);
console.log(output);
 }

 main();