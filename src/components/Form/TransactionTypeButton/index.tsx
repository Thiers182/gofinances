import React from 'react';
import {TouchableOpacityProps} from 'react-native'; // importado para não dar erro  de tipagem no styled do TransactionTypeButton 
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
  Title,

} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down:'arrow-down-circle'
}

interface Props extends RectButtonProps{
  title: string;
  type: 'up' | 'down';
  isActive: boolean; // criado para saber se o botão está ativo. Ou seja, caso o botão esteja ativo vou aplicar uma cor, caso não esteja ativo será aplicada uma outra cor
}

export function TransactionTypeButton({title,type,isActive,...rest }:Props){
  return (
    <Container 
      {...rest} 
      isActive={isActive} 
      type={type}
    
    >
      <Icon 
        name={icons[type]} //esse 'name' vai servir para pegar o que vem lá do registro e converter no icone desejado
        type={type}
      />
      
      <Title /*esse 'title' abaixo vai servir para pegar o que vem lá do registro e converter no nome desejado */ >
        {title} 
      </Title>
 
    </Container>
  );
}
