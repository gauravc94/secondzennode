const fs = require("fs")

const quote = "No beauty shines better than that of a good heart"
// fs.writeFile("awesome.js", quote, (err) => {
//     console.log("Completed writing awesome.js")
// })

//Task 1

const quote2 = "Live more worry less"
//create below files with quote2 as content
//inside the folder /backup/
// text-1.html
// text-2.html
// text-3.html
// ...
// text-10.html

// for (let i = 1; i <= 10; i++ ) {
//     fs.writeFile(`./backup//text-${i}.html`, quote2, (err) => {
//         console.log(`Completed creating text-${i}.html`)
//     })
// }

//Task 2
//node fs.js 20 => 20 files to be created || note-1.txt, .... note-20.txt

const quote3 = "Live Free or Die Hard"

const [, , n1] = process.argv 

// for ( let i = 1; i <= n1; i++ ) {
//     fs.writeFile(`./backup/note-${i}.txt`, quote3, (err) => {
//         console.log(`Completed creating note-${i}.txt`)
//     })
// }

// fs.readFile("./cool12.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error❌",err)
//     }
//     console.log(data)
// })

// const content = "All is Well"
// fs.appendFile("./cool.txt", content + "\n", (err) => {
//     console.log("completed appending to cool.txt")
// })

// fs.unlink("./toRemove.txt", (err) => {
//     if (err) {
//         console.log("Error deleting: ", err)
//     }
//     console.log("Deleted toRemove.txt successfully")
// })

// fs.readdir("./backup", (err, files) => {
//     if (err) {
//         console.log("Error reading the directory,", err)
//     }
//     console.log("All file names are: ", files)
// })


//delete all the files in the backup folder
//this will delete only the files inside the backup folder, not any folder that's inside it
// fs.readdir("./backup", (err, files) => {
//     files.forEach(fileName => {
//         fs.unlink(`./backup/${fileName}`, (err) => {
//             console.log(`deleted ${fileName} successfully`)
//         })
//     })
// })


// writeFile => callStack => WebAPI(whoever finishes writing first) => CallBack Queue => Event Loop => CallStack

// fs.writeFile, fs.readFile, fs.appendFile, fs.unlink => async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync => sync

for ( let i = 1; i <= n1; i++ ) {
    fs.writeFileSync(`./backup/note-${i}.txt`, quote3)
    console.log(`Completed creating note-${i}.txt`)
}

