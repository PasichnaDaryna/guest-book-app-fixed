import axios from "axios";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,

    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contacts-actions';


axios.defaults.baseURL = "/contacts";

export const fetchContacts = () => async (dispatch) => {
    console.log(1)
    dispatch(fetchContactRequest());

    try {
        const { data } = await axios.get("/");

        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
};

export const addContact = (name, message) => (dispatch) => {
    console.log(2)
    const contact = {
        name,
        message,
    };
    dispatch(addContactRequest);

    axios
        .post("/", contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch((error) => dispatch(addContactError(error)));
};






export default {
    fetchContacts,
    addContact

};