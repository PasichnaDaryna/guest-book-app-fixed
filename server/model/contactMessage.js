import mongoose from 'mongoose'
const { Schema, model } = mongoose


const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Add name '],
            unique: false,
        },
        message: {
            type: String,
            required: [true, 'Enter your message'],
            unique: false,
        },


    }
)

const ContactMessage = mongoose.model('ContactMessage', contactSchema)


export default ContactMessage