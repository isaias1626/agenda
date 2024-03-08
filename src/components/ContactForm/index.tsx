import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Contact } from '../../types/Contact'
import { addContact } from '../../actions/contactActions'
import { AddContato, CaixaTexto, Form } from './styles'

const ContactForm: React.FC = () => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newContact: Contact = {
      id: Math.random(),
      fullName,
      email,
      phone
    }
    dispatch(addContact(newContact))
    setFullName('')
    setEmail('')
    setPhone('')
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <CaixaTexto
          type="text"
          placeholder="Nome"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <CaixaTexto
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <CaixaTexto
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <AddContato type="submit">Novo Contato</AddContato>
      </Form>
    </>
  )
}

export default ContactForm
