const mongoose= require('mongoose');

    mongoose.connection('mongodb://localhost:27017/quizera', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("mongodb is connected"))
    .catch(err){
    console.log(err);
}
module.exports=mongoose.connection;