import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
  display: flex;
  width: 30vw;
  flex-direction: column-reverse;
  height: 92vh;
  border: 1px solid black;
  border-bottom: none;
  overflow-y: scroll;
`


function ListaDeMensagens(props){
    return(
        <Container>
            {props.lista}
        </Container>
    )
}



export default ListaDeMensagens