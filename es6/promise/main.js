const fs = require('fs');
// fs.readFile('./d.txt',function(err,res){
//     if(err){
//         console.log(err);
//         return;}
//     console.log(res.toString());
// });
function readFile(){
    const aFile = fs.readFileSync('a.txt');
    console.log(aFile);
    const bFile = fs.readFileSync('b.txt');
    console.log(bFile);
    const cFile = fs.readFileSync('c.txt');
    console.log(cFile);

}
readFile();