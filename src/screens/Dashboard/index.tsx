import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'; // aqui estou importante o componente do cartão e as propriedades

//componentes que criei para estilizar o app
import { 
  Container,
  Header,
  UserInfo,
  Photo,
  UserGreeting,
  UserName,
  User,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
} from './styles';

//Nesse caso estou adicinando o 'id' as propriedades do TransactionCardProps já que o id será usado aqui!
//Irei exportar também porque vai ser usado no styled do dashboard
export interface DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard(){

  const data:DataListProps[] = [{  
    id:'1',
    type:'positive',  
    title: 'Desenvolvimento de Site' ,
    amount: 'R$ 12.000,00', 
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
     },
    date: '13/04/2020'
  },
  {         
    id:'2',
    type:'negative',  
    title: 'Hamburgueria Pizzy' ,
    amount: 'R$ 59,00', 
    category: {
      name: 'Alimentação',
      icon: 'coffee'
     },
    date: '10/04/2020'
  },
  { 
    id:'3',
    type:'negative', 
    title: 'Aluguel do apartamento' ,
    amount: 'R$ 1.200,00', 
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
     },
    date: '27/03/2020'
  }
];

  return (
    <Container>

      <Header>

        <UserWrapper>


          <UserInfo>

            <Photo source={{
              uri: 'https://avatars.githubusercontent.com/u/92182610?v=4'}}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Thiers</UserName>
            </User>

          </UserInfo>

          <LogoutButton onPress = {() => {}} > 
            <Icon name='power'/>
          </LogoutButton>

        </UserWrapper>

        

      </Header>
      
      
      <HighlightCards> 
        <HighlightCard type = 'up' title = 'Entradas' amount = 'R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril'/> 
        <HighlightCard type = 'down' title = 'Saídas' amount = 'R$ 1.259,00' lastTransaction='Última saída dia 03 de abril'/>
        <HighlightCard type = 'total' title = 'Total' amount = 'R$ 16.141,00' lastTransaction='01 à 16 de abril'/>
      </HighlightCards> 

      <Transactions>

        <Title>Listagem</Title>
        <TransactionList 
          data = {data}
          keyExtractor={item => item.id}
          renderItem = {({item}) => <TransactionCard data = {item}/>} /* Serve para renderizar o elemento. Nesse ponto cada item esta sendo desestruturado e sendo passado*/
        />

      </Transactions>


    </Container>

  );
}


