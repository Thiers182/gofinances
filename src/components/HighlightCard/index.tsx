import React from "react";


import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles'

//criei uma interface para poder 'tipar' os componentes para os cartões ficaram 'dinâmicos'
interface Props {
  title: string;
  amount: string; // é referente ao valor
  lastTransaction: string; 
  type: 'up' | 'down' | 'total'; // para distinguir que são 3 tipos de cartões
}

const icon = {
  up: 'arrow-up-circle', 
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighlightCard({type, title, amount, lastTransaction}: Props){
  return(
    <Container type = {type} /*A propriedade type irá receber o tipo do cartão que pode ser up, down ou total*/> 
      <Header>
        <Title type = {type}>{title}</Title>
        <Icon name = {icon[type]} type={type} /* A primeira propriedade 'name' irá passar o ícone para o cartão correspondente. A propriedade type irá receber o tipo do cartão que pode ser up, down ou total*/ /> 
      </Header>

      <Footer>
        <Amount type = {type}>{amount}</Amount>
        <LastTransaction type = {type}>{lastTransaction}</LastTransaction>
      </Footer>

    </Container>
  )
}
