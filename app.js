const http = require('http')
const fs = require("fs")
const server = http.createServer((req,res)=>{

    fs.readFile('MyInfo.txt',(err,data)=>{
        if(err){

            res.writeHead(500,{"content-type":'text/plain'})
            console.log("sorry can't read from the server")
        }
        else {
            res.writeHead(200,{"content-type":"text/plain"})
            res.end(data)
        }
    })

})


const thePort = 3000 

const HOST = "127.0.0.1" ;

server.listen(thePort,HOST,()=>{
    console.log(`the server is now running on port # ${thePort} and host ${HOST}`)
})

