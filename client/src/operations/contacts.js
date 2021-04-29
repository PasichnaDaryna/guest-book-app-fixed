import axios from "axios";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,

    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from '../actions/contacts';


axios.defaults.baseURL = "http://localhost:5000";

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
    addContact,

};