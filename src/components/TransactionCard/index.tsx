import React from "react";  


import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styled";

interface Category {
  name: string; // e o nome vai ser o nome sem codificação. Por exemplo, 'Salário' ; 'Salário Mensal'
  icon: string;
}

//Para não ficar muitas propriedades nessa interface e não facilitar na hora de colocar as propriedades no dashboard, será criado um data com todas as propriedades
// aqui não vai ter 'id' pois o id vai ser usado na flatlist no dashboard logo como iremos usar essa interface externamente teremos que exporta-la
export interface TransactionCardProps{
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props{
    data: TransactionCardProps; //foi feita essa outra interface só com o intuito de deixas organizado 
}
  
export function TransactionCard({data}:Props){
  return(
    <Container>
        <Title>{data.title}</Title>

        <Amount type={data.type}>
          { data.type === 'negative' && '- ' /*Se o tipo for negativo acrescento o sinal de negativo */} 
          {data.amount}
        </Amount>

      <Footer>
        <Category>
          <Icon name = {data.category.icon}/* para pegar o icone dinamicamente*/ />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>

    </Container>
  )
}