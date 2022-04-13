import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control; // que vem do React Hook Form
  name: string;
  error: string;
}

export function InputForm({control, name, error, ...rest}:Props){
  return (
    <Container>
      <Controller
        control={control} //Indica que formulário ta controlando ele que vai ser lá na interface Register
        render={({field: { onChange,value }}) => ( //o render indica qual input vai ser controlado
          <Input
          onChangeText={onChange}
          value={value}
          {...rest }
        />

        )} // o on change é quando muda o valor do input, e o value é o valor do input inserido pelo usuário
      
        name={name}  
      />
      
      {error && <Error>{ error }</Error> /*Lẽ-se: Se houver erro que vai escrever o erro */}
    </Container>
  );
}