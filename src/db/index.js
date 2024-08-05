import {mongoose} from "mongoose"
import { DB_Name } from "../constants.js"


const connect_DB= async ()=>{

    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MOngoDB instance Connecter,${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error",error)
        process.exit(2)
    }

}

export default connect_DB;