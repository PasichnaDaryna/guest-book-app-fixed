import axios from 'axios'

const url = 'https://polar-forest-80707.herokuapp.com/contacts';


export const fetchContacts = () => axios.get(url)

export const createContact = (newContact) => axios.post(url, newContact)