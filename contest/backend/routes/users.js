const express=require("express")
const router=express.Router()

router.get('/', (req,res)=>{
    res.send('user-list')
  })
  
router.get('/login', (req,res)=>{
    res.send('user-form')
})

router.get('/:id', (req,res)=>{
    res.send(`Hello ${req.params.id}`)
})

module.exports=router