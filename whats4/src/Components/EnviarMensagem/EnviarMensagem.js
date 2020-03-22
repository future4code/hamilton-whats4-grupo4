import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components'
import ListaDeMensagens from './ListaDeMensagens/ListaDeMensagens';

const Container = styled.div `
  height: 97vh;
  width: 30vw;
  margin: 1vh auto;
  border: 1px solid black;
`


const ContainerInputs = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 30vw;
  height: 5vh;
  border-top: 1px solid black;
`

const InputRemetente =  styled.input `
  width: 8vw;

`
const InputMensagem = styled.input `
  width: 15vw;
`

const Button = styled.button `
  width: 7vw;
  font-size: 1vw;

`

class EnviarMensagem extends React.Component {
  constructor(props){
      super(props)

      this.state = {
          mensagens: [
              {
                  nome: "", 
                  mensagem: "",
              }
          ],
  
          valorInputNome: "",
          valorInputMensagem: "",
      }
  }

  adicionaMensagem = () => {
      const novaMensagem = {
          nome: this.state.valorInputNome,
          mensagem: this.state.valorInputMensagem,
      }    
      
      const novasMensagens = [novaMensagem, ...this.state.mensagens]
  
      this.setState ({mensagens: novasMensagens})
  }
  
  onChangeInputNome = event => {
      this.setState({valorInputNome: event.target.value})
  }
  
  onChangeInputMensagem = event => {
      this.setState({valorInputMensagem: event.target.value})
  }
  
  render() {

      const mensagensEnviadas = this.state.mensagens.map(usuario => {
          if(usuario.nome === "" || usuario.mensagem === "")
          {
            return 
          }
          else {
            return (
                <p><strong>{usuario.nome}</strong> : {usuario.mensagem}</p>
            )
          }
      })


      return ( 
          <Container>

          <ListaDeMensagens
          lista = {mensagensEnviadas}
          />
          
          <ContainerInputs>
            <InputRemetente
            value = {this.state.valorInputNome}

            onChange= {this.onChangeInputNome}

            placeholder ={"Usuário"}
            />
            
            <InputMensagem
            value = {this.state.valorInputMensagem}

            onChange = {this.onChangeInputMensagem}

            placeholder ={"Mensagem..."}
            />

            <Button 
            onClick = {this.adicionaMensagem}
            >
            Enviar
            </Button>
          </ContainerInputs>
          </Container>
      )
  }

}

export default EnviarMensagem