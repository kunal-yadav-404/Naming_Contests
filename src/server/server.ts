import express from 'express';
import { servicesVersion } from 'typescript';

const server = express();

server.use(express.static("dist"));

server.set("view engine","ejs");

server.use("/",(req,res)=>{
    // res.send("Hello Kunal");
    res.render("index",{
        content: "EJS is <em>cool!</em>",
    });
});

// console.log(express);

server.listen("8080","localhost",()=>{
    console.info(
        "Express server is listening at http://localhost:8080"
    );

});