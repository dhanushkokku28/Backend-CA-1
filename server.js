const express =require('express')
const port=8888
const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send({messege :"Hello UserName"})
})

app.post('/use',(req,res)=>{
    try{
        const{Username,Email,Password,DateofBirth}=reqBody
        if(!Username || !Email)
            return res.status(400).json({messege:"UserName cannot be empty"}) 
        if(!Email)
            return res.status(400).json({messege:"Email cannot be empty"}) 
        const len =Password.length
        if(len<8||len>16)
            return res.status(400).json({messege:"Password length should greater than 8 and less than 16"})
        return res.status(200).json({messege:"Successfully completed"})
    }
    catch(e){
        console.log(e)
    }
})

app.listen(port,()=>{
    console.log(`Successfully completed at ${port}`)
})