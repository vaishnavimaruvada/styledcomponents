import styled from 'styled-components'

export const Heading = styled.h1`
  color: red;
  font-family: 'Roboto';
`

export const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.color ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.bgcolor ? '#ffffff' : '#0070c1')};
`
