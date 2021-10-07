import {readFile, writeFile} from "fs/promises";

// ? reading the file
let template = await readFile(new URL("template.html", import.meta.url), "utf-8");

const data = {
    title : "Learn Node.js",
    body: "This is the final HTML"
}

// ? modifying the filedata with data from above
for( const [k,v] of Object.entries(data)) {
template = template.replace(`{${k}}`,v)
}

// ? writing the file
await writeFile(new URL("index.html", import.meta.url), template)

// console.log(template);