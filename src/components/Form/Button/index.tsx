import React from 'react';
import {  RectButtonProps } from 'react-native-gesture-handler';

import { 
  Container,
  Title,

} from './styles';

interface Props extends RectButtonProps{
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