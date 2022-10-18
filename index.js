var express=require('express');
var bodyParser=require('body-parser');


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send("Hello");
});
//integrate database here make it a async function

app.get("/login",(req,res)=>{
    res.send("login");
});

app.get("/registration",(req,res)=>{
    res.send("registration page");
    //render html pages using res.render() function
});
//place your html files in views
//
app.get("/booktickets" ,(req,res)=>{
    res.send("tickets-booking page");
});

app.listen(PORT||process.env.PORT,() => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});