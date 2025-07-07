const express = require('express');
const app = express();
const port = 5600;
app.use(express.json());
const data = [];
//use middleware
   app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
   });
//basic routing
app.get('/users',(req,res)=>{
    res.json(data);
})
//search using query string
app.get('/search',(req,res)=>{
    const name = req.query.name;
    const result = data.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);
});
//get data by id(dynamic routing)
app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = data.find(x=>x.id === id);
    user ? res.json(user) : res.status(404).json("user not found");
});
//insert data
app.post('/add',(req,res)=>{
    const newuser =  req.body;
    newuser.id = data.length +1;
    data.push(newuser);
    res.json("user added successfully");
});
//chain routing
app.route('/product')
   .get((req,res)=>res.json('product view'))
   .post((req,res)=>res.json('product data'))
   .put((req,res)=>res.json('product update'));

   

app.listen(port, ()=>{
    console.log("server is running port 5600");
})