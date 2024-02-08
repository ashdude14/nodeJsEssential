// Express
const http= require('http');
const port=process.env.PORT||5000;
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hi i am Ash!</h1>')
res.end("AGFaG")}
else if(url==='/about'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Hi i am about!</h1>')

}
else {
    res.writeHead(404,{'content-type':'text/html'})
    res.end('<h4>Page not found</h4>')
}
 
});

server.listen(port,()=>{
console.log(`server runnimg on ${port}`)
})