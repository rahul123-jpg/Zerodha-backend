const {model}=require("mongoose")
const {HoldingsSchema}=require("../Schemas/HolidingsSchema")

const HoldingsModel=new model("holding",HoldingsSchema)

module.exports={HoldingsModel}
