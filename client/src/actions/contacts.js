import * as api from '../api'


//Action creators

// export const getContacts = () => async (dispatch) => {


//     try {
//         const { data } = await api.fetchContacts()
//         dispatch({ type: "FETCH_ALL", payload: data })
//     }
//     catch (error) {
//         console.log(error.message)
//     }


// }


// export const createContact = (contact) => async (dispatch) => {
//     try {
//         const { data } = await api.createContact(contact)
//         dispatch({ type: 'CREATE', payload: data })

//     } catch (error) {
//         console.log(error)

//     }
// }


// end

// new below




import { createAction } from "@reduxjs/toolkit";



export const fetchContactRequest = createAction(
    "contacts/fetchcontactsRequest"
);
export const fetchContactSuccess = createAction(
    "contacts/fetchcontactsSuccess"
);
export const fetchContactError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");
