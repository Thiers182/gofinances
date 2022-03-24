import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import { 
  Container,
  Title,

} from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
}

//dentro dos parênteses estou pegando as propriedades do props e todas as demais do TouchAbleOpacity
export function Button({title, ...rest}:Props){
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}