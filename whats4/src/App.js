import React from 'react';
import propTypes from 'prop-types'
import EnviarMensagem from './Components/EnviarMensagem/EnviarMensagem'

/*
const Container = styled.div `
  height: 97vh;
  width: 30vw;
  margin: 1vh auto;
  border: 1px solid black;
`
*/

/*
const ListaDeMensagens = styled.div `
  display: flex;
  flex-direction: column-reverse;
  height: 95%;
  border: 1px solid black;
  border-bottom: none;
  overflow-y: auto;
`
*/

class App extends React.Component {

  render() {

    return (
      <EnviarMensagem/>
    )
  }
}

export default App;