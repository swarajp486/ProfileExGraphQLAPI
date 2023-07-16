//Mongoose model schema

const {model,Schema}=require('mongoose')

const profileSchema=new Schema({
    name:String,
    qualification:String,
    createdAt:String
})

module.exports=model('Profile',profileSchema)