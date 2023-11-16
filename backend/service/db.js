const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/emp')

const Emplooye=mongoose.model('Emplooye',{
    id:String,
    name:String,
    age:Number,
    desig:String,
    salary:Number
})







// module.exports = Product;
 

module.exports={
    Emplooye,
    
}