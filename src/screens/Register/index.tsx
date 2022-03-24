import React, {useState} from 'react';
import{Modal} from 'react-native'; // O modal é um elemento que abre e fecha ao ser selecionado
 
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import {CategorySelect} from '../CategorySelect';

import { 
  Container, 
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';

export function Register(){

  //a gente vai criar o estado para saber qual botão está selecionado, para conseguirmos manipular o fundo de acordo com o tipo do botão selecionado
  const [transactionType, setTransactionType ] = useState('');

  //estado criado para controlar o Modal, ou seja, controlar se vai abrir uma nova página ou não     
  const[categoryModalOpen, setCategoryModalOpen] = useState(false);

  //Estado criado para passar a categoria selecionada pelo usuário e que irá aparecer na paǵina de registro. Ou seja, so precisamos do id(key) e do nome
  const[category, setCategory]=useState({
    key:'category',
    name:'Categoria',
  });



  //handle - usando quando algo é disparado após clique do usuário
  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  };

  //Função criada para para lidar com o fechamento do modal
  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  //Função criada para para lidar com o fechamento do modal
  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
          <Fields>

              <Input
                placeholder='Nome' //esse é o lugar onde o usuário vai digitar o nome
              />

              <Input
                placeholder='Preço' //esse é o lugar onde o usuário vai digitar o nome
              />

              <TransactionTypes>

                <TransactionTypeButton
                  type= 'up'
                  title= 'Income'
                  onPress={() => handleTransactionTypeSelect('up')}
                  isActive={transactionType === 'up'}
                />
                              
                <TransactionTypeButton
                  type='down'
                  title='Outcome'
                  onPress={() => handleTransactionTypeSelect('down')}
                  isActive={transactionType === 'down'}
                />

              </TransactionTypes>

              <CategorySelectButton 
                title = 'Categoria'
                onPress={handleOpenSelectCategoryModal}
              />

          </Fields>

          <Button title='Enviar'/>
           
      </Form>

      
      <Modal //por padrão o modal é TRUE ou seja a tela é vai ser direcionada para a screen CategorySelect
        visible={categoryModalOpen}
      >
        <CategorySelect
            category = {category}
            setCategory = {setCategory}
            closeSelectCategory ={handleCloseSelectCategoryModal}
        /> 
      </Modal>

    </Container>
  );
}
