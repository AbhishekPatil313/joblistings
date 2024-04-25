const { default: mongoose } = require("mongoose");
const connection = {

}

export const conntectToDb = async()=>{
    try {
        if(connection.isConnected){
            console.log("connection exists !")
            return ;
        }
        const db = await mongoose.connect(process.env.MongoUrl);
        connection.isConnected =    db.connections[0].readyState;
      } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}   