import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from '../types/actionTypes'
import { Contact } from '../types/Contact'

export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact
})

export const removeContact = (id: number) => ({
  type: REMOVE_CONTACT,
  payload: id
})

export const editContact = (contact: Contact) => ({
  type: EDIT_CONTACT,
  payload: contact
})
