import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from '../types/actionTypes'
import { Contact } from '../types/Contact'

interface Action {
  type: string
  payload: Contact | number
}

const initialState: Contact[] = []

const contactsReducer = (state = initialState, action: Action): Contact[] => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload as Contact]
    case REMOVE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload)
    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === (action.payload as Contact).id
          ? (action.payload as Contact)
          : contact
      )
    default:
      return state
  }
}

export default contactsReducer
export type RootState = ReturnType<typeof contactsReducer>
