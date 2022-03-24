import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

// Criei essa interface para permitir acessar os 2 diferentes tipos dos valores do amount criados no Index do Transaction card, aqui na aba de estilos. Ou seja quando passar o mouse em cima do type na estilização do amount estará os 2 valores possíveis para este tipo.
interface TransactionProps{
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px; // so para separar os cartões.Podemos utilizar no margin e no padding unidade em pixel
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Amount = styled.Text<TransactionProps>`
  margin-top:2px; 

  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({theme, type}) => 
  type=== 'positive' ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
  flex-direction: row; /* colocar elementos alinhados em uma linha*/
  justify-content: space-between;/*vai espaçar os elementos respeitando o padding anterior */

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row; /* colocar elementos alinhados em uma linha*/
  align-items: center;
`;
export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const CategoryName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};

  margin-left:17px;
`;

export const Date = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
`;

