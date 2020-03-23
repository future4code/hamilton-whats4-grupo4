import React from 'react';
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

const InputRemetente =  styled.select `
  width: 6vw;

`
const InputMensagem = styled.input `
  width: 17vw;
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
                  texto: "",
              }
          ],
  
          valorInputNome: "",
          valorInputTexto: "",
      }
  }

  adicionaMensagem = () => {
      const novaMensagem = {
          nome: this.state.valorInputNome,
          texto: this.state.valorInputTexto,
      }    
      
      const novasMensagens = [novaMensagem, ...this.state.mensagens]
  
      this.setState ({mensagens: novasMensagens})
  }


  deletarMensagem = (textoParaDeletar, nomeParaDeletar) => {
    let mensagemParaDeletar

    for(const elemento of this.state.mensagens){
      if (elemento.texto === textoParaDeletar && elemento.nome === nomeParaDeletar){
          mensagemParaDeletar = elemento
      }
    }

    const mensagensCopia = [... this.state.mensagens]
    const indiceParaDeletar = mensagensCopia.indexOf(mensagemParaDeletar)
    mensagensCopia.splice(indiceParaDeletar, 1)

    this.setState({
      mensagens: mensagensCopia
    })
    console.log(mensagemParaDeletar)
  }
  
  onClickInputNome = event => {
      this.setState({valorInputNome: event.target.value})
  }
  
  onChangeInputTexto = event => {
      this.setState({valorInputTexto: event.target.value})
  }
  
  render() {

      const pStyleVoce = {
        direction:"rtl",
        alignSelf: "flex-end",
        backgroundColor: "#b1dced",
        marginRight: "10px",
        borderRadius: "8px",
        width: "30%",
        paddingRight: "8px",
        paddingTop: "8px",
      }

      const pStyle = {
        backgroundColor: "#b1dced",
        marginLeft: "10px",
        borderRadius: "8px",
        width: "30%",
        paddingLeft: "8px",
        paddingTop: "8px",
      }


      const mensagensEnviadas = this.state.mensagens.map((usuario, index) => {
          if(usuario.nome === "" || usuario.texto === "")
          {
            return 
          } else if (usuario.nome === "Você") {
            return(
            <p
            style={pStyleVoce}
            key={index}
            onDoubleClick={() => {this.deletarMensagem( usuario.texto, usuario.nome )}}
            >
              <strong>{usuario.nome}</strong> <p>{usuario.texto}</p> 
            </p>
            )
          } else {
            return (
                <p
                style={pStyle}
                key={index}
                onDoubleClick={() => {this.deletarMensagem( usuario.texto, usuario.nome )}}
                >
              <strong>{usuario.nome}</strong> <p>{usuario.texto}</p> 
                </p>
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
            onClick = {this.onClickInputNome}
            required
            >
              <option value="-"> - </option>
              <option value="Você"> Você </option>
              <option value="Ronilda"> Ronilda </option>
              <option value="Rafael"> Rafael  </option>
              <option value="Joelma"> Joelma </option>
              <option value="Lindoval"> Lindoval </option>
              <option value="Railton"> Railton </option>

            </InputRemetente>
            
            <InputMensagem
            value = {this.state.valorInputTexto}

            onChange = {this.onChangeInputTexto}

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