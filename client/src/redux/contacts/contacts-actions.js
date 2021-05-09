// import * as api from '../../api/index'

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
