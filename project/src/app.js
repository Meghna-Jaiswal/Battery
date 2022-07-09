const mongoose = require("mongoose");

//connection creation and creatin a new db
mongoose.connect("mongodb://localhost:27017/battery")
    .then (()=>{
        console.log("connection Successful");})
    .catch((err)=>{
        console.log("Problem in connect");
    })

//schema
const infoSchema = mongoose.Schema({
    batteryId: String,
    company: String,
    name: String,
    manufactureDate:{
        type:Date,
        default:Date.now
    },
    installDate:{
        type:Date,
        default:Date.now
    }
})

//collection creation
const Info = new mongoose.model("Info",infoSchema);

// create document or insert
const createDocument = async ()=>{
    try{
        const batteryInfo1 = new Info({
            batteryId: "battery1",
            company: "abcd",
            name: "reliance",
        })
        const batteryInfo2 = new Info({
            batteryId: "battery2",
            company: "abcde",
            name: "reliance",
        })
        const batteryInfo3 = new Info({
            batteryId: "battery3",
            company: "abcdef",
            name: "reliance",
        })
        const result = await Info.insertMany([batteryInfo1, batteryInfo2, batteryInfo3]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// createDocument();
