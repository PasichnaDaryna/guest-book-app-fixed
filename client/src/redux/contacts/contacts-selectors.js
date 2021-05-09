import { createSelector } from '@reduxjs/toolkit';
export const getAllContacts = (state) => state.contacts.items;

export const getLoader = (state) => state.contacts.loading;





const contactSelectors = {
    getAllContacts,

    getLoader,


};
export default contactSelectors;