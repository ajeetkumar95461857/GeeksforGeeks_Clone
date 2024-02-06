const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=3001

const schema=new mongoose.Schema({

    Age:{
        type:Number
    },
})
const data=[
    {
        Age:4
    },
]
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://DataSorting:DataSorting@datasorting.fglolnr.mongodb.net/')
.then(()=>{
    console.log("Succesfull")
}).catch(()=>{
    console.log("error")
})

app.get('/',(req,res)=>{
    res.send("hii");
})

app.post("/merge",async(req,res)=>{
    try{
        const data1=new schema(data);
        await data1.save();
        res.send("Data has been saved")
    }
    catch{
        console.log("Data has not been saved")
    }
})

app.listen(port,()=>{
    console.log("Running on port 3001")
})
