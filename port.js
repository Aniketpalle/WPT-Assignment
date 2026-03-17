 const http=require('http');
const server1=http.createServer(fromserver);
function fromserver(req,res)
{
    res.write("<h1> from server</h1> <br> from server to postman");
    res.write(" from server to postman");
    res.end();

    //  res.write(" from server to postman");
    // res.end();
     
}
server1.listen(5050);


