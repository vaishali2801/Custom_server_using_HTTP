//using http method we make server
import http from "http";

const server = http.createServer((req ,res)=>{
    res.end("Hello from server!!!!");
});

const port=5001;
server.listen(port, (err) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("server running on port",port);
    }
});