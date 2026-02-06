import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res)=>{
     res.json({message: "Hello World v3(new chnages to code- complete)"});
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})