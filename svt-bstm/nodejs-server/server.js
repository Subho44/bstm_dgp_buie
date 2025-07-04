
//display a product list
//use arrow function
//use spread operator
const http  = require("http");
const products = [
    {id:1,name:"laptop",price:45000},
    {id:2,name:"laptop",price:45000},
    {id:3,name:"laptop",price:45000},
    
];
const newproduct = {id:1,name:"mobile",price:4500};
const updatedproduct = [...products,newproduct];

//create server
const server = http.createServer((req,res)=>{
    //header-file
    res.writeHead(200,{'Content-Type':'application/json'});
    if(req.url === '/product') {
        res.end(JSON.stringify(products));
    }
    else if(req.url ==='/newproduct'){
       res.end(JSON.stringify(updatedproduct));
    }
    else if(req.url ==='/about'){
        res.end("about page");
    }
      else if(req.url ==='/login'){
        res.end("login done");
    }
    else {
        res.end("server error");
    }
});

//start server
const port = 5600;
server.listen(port,()=>{
    console.log("server is running port 5600");
});