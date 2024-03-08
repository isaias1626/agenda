import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers/contactsReducer'
import ContactItem from '../ContactItem'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state)

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

export default ContactList
