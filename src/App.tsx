import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import contactsReducer from './reducers/contactsReducer'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { Container, GlobalStyle, Titulo } from './styles'

const store = createStore(contactsReducer)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Titulo>Lista de Contatos</Titulo>
      <Container>
        <ContactForm />
        <ContactList />
        <GlobalStyle />
      </Container>
    </Provider>
  )
}

export default App
