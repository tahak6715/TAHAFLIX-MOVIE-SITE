
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }

},{
      timestamps:true,  
}
)

const Contact = mongoose.models.Contact || mongoose.model('Contact',contactSchema)