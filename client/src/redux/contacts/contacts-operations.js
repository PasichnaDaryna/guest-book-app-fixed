import axios from "axios";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,

    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contacts-actions';


axios.defaults.baseURL = "https://polar-forest-80707.herokuapp.com";

export const fetchContacts = () => async (dispatch) => {
    dispatch(fetchContactRequest());

    try {
        const { data } = await axios.get("/contacts");

        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
};

export const addContact = (name, message) => (dispatch) => {
    const contact = {
        name,
        message,
    };
    dispatch(addContactRequest);

    axios
        .post("/contacts", contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch((error) => dispatch(addContactError(error)));
};






export default {
    fetchContacts,
    addContact

};