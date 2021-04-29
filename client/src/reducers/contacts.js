import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
} from '../actions/contacts'



const items = createReducer([], {
    [fetchContactSuccess]: (state, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],

});


const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,

});

const error = createReducer(null, {});


export default combineReducers({
    items,
    loading,
    error,
});