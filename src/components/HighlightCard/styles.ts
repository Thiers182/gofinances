import styled, {css} from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'

interface TypeProps{
  type: 'up' | 'down' | 'total'; // Criei essa interface para permitir acessar os 3 tipos de cartão criados no Index, aqui na aba de estilos
}
// Quando coloco <IconProps> estou passando a tipagem que criei na interface
export const Container = styled.View<TypeProps>`
  background-color: ${({theme, type}) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row; /* colocar elementos alinhados em uma linha*/
  justify-content: space-between;/*vai espaçar os elementos respeitando o padding anterior */
  align-items: flex-start;/*alinhar no topo */
`;
export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type })=> type === 'total' ? theme.colors.shape : theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

//A primeira linha abaixo quer dizer que além de eu acessar o ícone da biblioteca Feather também posso acessar a tipagem IconProps, pois criei uma interface chamada IconProps.
//As linhas com uma comparação quer dizer que vai ser aplicada uma estilização baseada no tipo do cartão
export const Icon = styled(Feather)<TypeProps>` 
  font-size: ${RFValue(40)}px;

  ${({type}) => type === 'up' && css `color: ${({theme}) => theme.colors.success}`};
  ${({type}) => type === 'down' && css `color: ${({theme}) => theme.colors.attention}`};
  ${({type}) => type === 'total' && css `color: ${({theme}) => theme.colors.shape}`};
`;

export const Footer = styled.View`
  
`;

export const Amount = styled.Text<TypeProps>`
  color: ${({ theme, type })=> type === 'total' ? theme.colors.shape : theme.colors.title};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 30px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${({ theme, type })=> type === 'total' ? theme.colors.shape : theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

 