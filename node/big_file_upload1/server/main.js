const http = require('http');
const path = require('path');
const multiparty = require('multiparty');
const fse = require('fs-extra');
const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname,'.',"target");
server.on("request",async(req,res)=>{
    //跨域问题
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    // res.end("hello");
    if(req.url == '/'){
        const multipart = new multiparty.Form();
        // console.log(multipart);
        multipart.parse(req,async(err,fields,files) => {
            if(err)  return ;
            // console.log(files);
            const [chunk] = files.chunk;
            const [filename] = fields.filename;
            // console.log(filename)
            const dir_name = filename.split('-')[0];
            const chunkDir = path.resolve(UPLOAD_DIR,dir_name);
            if(!fse.existsSync(chunk)){
                await fse.mkdirs(chunkDir);
            }
            // console.log(chunk.path)
            await fse.move(chunk.path,`${chunkDir}/${filename}`);
        })
    }else if(req.url == '/merge'){
        res.end('ok');
    }

});

server.listen(3000,()=>console.log('正在聆听3000端口'))