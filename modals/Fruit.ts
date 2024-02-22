import mongoose from "mongoose"

const fruitSchema = new mongoose.Schema({
    fruitName:{
        type:String,
        required:[true,"No name specified"]
    },
    fruitColor:{
        type:String,
        required:[true,"No name specified"]
    },
})

export default mongoose.models.Fruit || mongoose.model("Fruit",fruitSchema)


