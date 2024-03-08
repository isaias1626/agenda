import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
  padding: 0 500px;

  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`
export const Titulo = styled.h1`
  font-size: 36px;
  text-align: center;
  padding-top: 80px;
  font-family: Indie Flower, cursive;
  font-weight: bold;
`
