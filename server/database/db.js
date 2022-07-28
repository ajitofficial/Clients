import mongoose from "mongoose" 


const Connection = async (username,password) =>{
    const URL= `mongodb://${username}:${password}@crud-app-shard-00-00.mokpf.mongodb.net:27017,crud-app-shard-00-01.mokpf.mongodb.net:27017,crud-app-shard-00-02.mokpf.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-pzkqli-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully...');
    }catch(error){
        console.log('Error while connecting with database',error);
    }
}

export default Connection;