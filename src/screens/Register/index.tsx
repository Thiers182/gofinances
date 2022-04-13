import React, {useState} from 'react';
import{
  Modal, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native'; // O modal é um elemento que abre e fecha ao ser selecionado


import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

import { useForm} from 'react-hook-form';

 
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
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

export type FormData = {
  [name: string]: any;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório, pow!'), //estou dizendo que vai ser um nome que é obrigatório e caso não seja colocado vai ser emitido uma mensagem
  amount: Yup.number().typeError('Informe um valor numérico').positive('O valor não pode ser negativo').required('O valor é obrigatório!')
});


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

  //foi criado para lidar com os inputs do formulário e importado da ferramenta hook form
  const {
    control,  // que servir para registrar os inputs em nosso formulário
    handleSubmit, // função que pega os valores do formulário e envia
    formState: {errors} // serve para capturar os erros e melhorar a experiência do usuário
  } = useForm({
    resolver: yupResolver(schema) // vai fazer com que o envio dos valores dos enviados siga um padrão
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

  function handleRegister(form:FormData){
    if(!transactionType) //Lê-se: se o transactionType for vazio não siga o processo. O Sinal de exclamação serve para verificar se algo está vazio!
      return Alert.alert('Selecione o tipo da transação, fidapé!');

    if(category.key === 'category')
      return Alert.alert('Selecione uma categoria, fidapé!');

    const data = {
      name:form.name,
      amount: form.amount,
      transactionType,
      category:category.key
    }
    console.log(data);
  }

  //Keyboard.dismiss serve para quando o usuário clicar em qualquer lugar da tela fechar o teclado
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <Container>
        
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
            <Fields>

                <InputForm
                  placeholder='Nome' //esse é o lugar onde o usuário vai digitar o nome
                  control={control}
                  name='name'
                  autoCapitalize='sentences' //characters, vai deixar tudo digitado pelo usuário em maiúsculo. words, vai deixar a primeira letra de cada palavra maiúscula. 
                  autoCorrect={false} //serve para não haver a correção automática das palavras
                  error={errors.name && errors.name.message}
                />

                <InputForm
                  placeholder='Preço' //esse é o lugar onde o usuário vai digitar o nome
                  control={control}
                  name='amount'
                  keyboardType='numeric' //para permitir apenas números
                  error={errors.amount && errors.amount.message}
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
                  title = {category.name}
                  onPress={handleOpenSelectCategoryModal}
                />

            </Fields>

            <Button 
              title='Enviar'
              onPress={handleSubmit(handleRegister)} // quando clicar no botao enviar o handleSubmit vai ser chamado que vai transferir os valores dos inputs para o handleRegister
            />
            
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
    </TouchableWithoutFeedback>

  );
}