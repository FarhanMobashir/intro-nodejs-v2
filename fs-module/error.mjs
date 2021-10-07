// import { readFile } from "fs";
import { readFile } from "fs/promises";


// ? error handling using callbackify
// readFile(new URL("app.mjs", import.meta.url), "utf-8", (err, data) => {
//     if(err) {
//         throw err;
//     } else {
//         //
//     }
// })

// ? error handling using async await
// try {
//     const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8")

// } catch (e) {
//     console.error("Hello") 
// }

// ? catching all error but we can't catch actually
process.on("uncaughtException", (e) => {
    console.log(e);
})
const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8")

console.log("ended...")
