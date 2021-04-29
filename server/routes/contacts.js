import express from 'express'

import { getContacts, addContact } from '../controllers/contacts.js'

const router = express.Router();

// http://localhost:5000/contacts

router.get('/', getContacts)
router.post('/', addContact)

export default router