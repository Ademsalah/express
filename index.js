const express= require ('express')

const app = express()

const port = 5000    
console.log(port)
const datafunc= require('./middle/Data')
console.log(datafunc)

app.get('/get', (req,res)=>{
    res.send('salut bon appetit')
})
app.use('/static',express.static(__dirname+'/public'))

app.get('/',datafunc,(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/service', datafunc , (req,res)=>{
    res.sendFile(__dirname+'/public/outOfService.html')
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})

app.use(express.static(__dirname+"/public"));

app.listen(port,err=>{
    err?console.log(err):console.log('well done')
})


