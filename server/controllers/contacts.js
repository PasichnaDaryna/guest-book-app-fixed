import ContactMessage from '../model/contactMessage.js'

export const getContacts = async (req, res) => {



    try {
        const contactMessages = await ContactMessage.find();

        console.log(contactMessages)

        res.status(200).json(contactMessages)
    } catch (error) {

        res.status(404).json({ message: error.message })

    }

}


export const addContact = async (req, res) => {
    const { id, name, message } = req.body;

    const newContactMessage = new ContactMessage({ id, name, message })
    try {
        await newContactMessage.save();

        res.status(201).json(newContactMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}