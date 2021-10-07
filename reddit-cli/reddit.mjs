#! /usr/bin/env node
// ? adding hashbin for detection of cli in the entry file
import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

// todo Caporal and commander and oclif are goood cli framework

// ? getting arguments from the cli
const {argv} = yargs(process.argv);

// ? fetching the data
const res = await fetch("https://reddit.com/.json");
const data = await res.json();


// ? picking a random post
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
// ? making the link
const link = `https://reddit.com${randomPost.data.permalink}`

// ? handling argumnet
if(argv.print) {
    console.log(
        `
        title: ${randomPost.data.title}
        link: ${link}
        `)
} else if(argv.open) {
    open(link);
} else {
     console.log(
        `--print: Print a random post from reddit,
         --open:  Open a random post from reddit
        `)
}

