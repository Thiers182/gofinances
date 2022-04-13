//esse imput form foi criado para utilizar o react hook form. Que nada mais é do que um artificio para deixar a aplicação menos pesada de forma a não atualizar a todo momento os estados quando o usuário preenche os inputs
import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
width: 100%;
`

export const Error = styled.Text`
font-size:${RFValue(14)}px;
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.attention};

margin: 7px 0;  

`