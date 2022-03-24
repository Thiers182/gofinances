import styled, {css} from 'styled-components/native' // importei o css para poder mudar a cor do botão 'income' ou
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';


interface IconProps {
  type: 'up' | 'down';
  isActive: boolean;
}

interface ContainerProps{
  isActive: boolean;
  type:'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width:48%;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({type, isActive}) => isActive ? 0: 1.5}px; /*o tamanho da borda é de 1.5 px, sólido com a cor de texto*/
  border-style:solid;
  border-color: ${({theme})=>theme.colors.text};

  
  border-radius:5px;

  padding: 16px;

  /*Abaixo estou verificando - Se o isActive é true e o type é up então aplique um css */
  ${({type, isActive})=> isActive && type ==='up' && css`
    background-color: ${({theme})=> theme.colors.sucess_light}
  `}

    /*Abaixo estou verificando - Se o isActive é true e o type é down então aplique um css */
    ${({type, isActive})=> isActive && type ==='down' && css`
    background-color: ${({theme})=> theme.colors.attention_light}
  `}

`;

export const Icon = styled(Feather)<IconProps>`
   font-size: ${RFValue(24)}px;
   color:${({theme})=>theme.colors.success};
   margin-right:12px;

   color: ${({theme, type})=> type === 'up' ? theme.colors.success:theme.colors.attention}
`;

export const Title = styled.Text`

  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=>theme.fonts.regular};
  color:${({theme})=>theme.colors.title}; 

`;