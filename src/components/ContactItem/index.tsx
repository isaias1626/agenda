import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Contact } from '../../types/Contact'
import { removeContact, editContact } from '../../actions/contactActions'
import {
  Bloco,
  ButtonCancelar,
  ButtonEditar,
  ButtonRemover,
  ButtonSalvar,
  Res,
  TextEdition
} from './styles'

interface Props {
  contact: Contact
}

const ContactItem: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [editedContact, setEditedContact] = useState(contact)

  const handleRemove = () => {
    dispatch(removeContact(contact.id))
  }

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSaveEdit = () => {
    dispatch(editContact(editedContact))
    setEditMode(false)
  }

  const handleCancelEdit = () => {
    setEditedContact(contact)
    setEditMode(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Bloco>
      {!editMode ? (
        <>
          <Res>
            <strong>Nome: </strong>
            {contact.fullName}
          </Res>
          <Res>
            <strong>E-mail: </strong>
            {contact.email}
          </Res>
          <Res>
            <strong>Telefone: </strong> {contact.phone}
          </Res>
          <ButtonEditar onClick={handleEdit}>Editar</ButtonEditar>
          <ButtonRemover onClick={handleRemove}>Remover</ButtonRemover>
        </>
      ) : (
        <>
          <TextEdition
            type="text"
            name="fullName"
            value={editedContact.fullName}
            onChange={handleChange}
          />
          <TextEdition
            type="email"
            name="email"
            value={editedContact.email}
            onChange={handleChange}
          />
          <TextEdition
            type="text"
            name="phone"
            value={editedContact.phone}
            onChange={handleChange}
          />
          <ButtonSalvar onClick={handleSaveEdit}>Salvar</ButtonSalvar>
          <ButtonCancelar onClick={handleCancelEdit}>Cancelar</ButtonCancelar>
        </>
      )}
    </Bloco>
  )
}

export default ContactItem
