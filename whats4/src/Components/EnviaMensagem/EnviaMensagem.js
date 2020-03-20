import React from 'react'

export class EnviaMensagem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mensagens: [
                {
                    nome: "Luan", mensagem: "Oi! Eu sou um teste"
                }
            ],

            valorInputNome: "",
            valorInputMensagem: ""
        }
    }

    adicionaMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        }    
        
        const novasMensagens = [novaMensagem, ...this.state.pessoas]

        this.setState ({mensagens: novasMensagens})
    }
    
    onChangeInputNome = event => {
        this.setState({valorInputNome: event.target.value})
    }

    onChangeInputMensagem = event => {
        this.setState({valorInputMensagem: event.target.value})
    }
    
    render() {


        return (
            <div>teste</div>
        )
    }
}

 