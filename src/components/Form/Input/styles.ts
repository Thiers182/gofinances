import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

//coloquei entre parênteses o TextInput apenas para não dar erro de tipagem, que inclusive não tinha dado erro.
export const Container = styled(TextInput)`
  width:100%;
  padding: 18px 16px; /*o primeiro valor é relativo ao espaçamento superior e inferior e o segundo valor o espaçamento lateral (esquerda-direita)*/ 
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=>theme.fonts.regular};
  color:${({theme})=>theme.colors.text};

  background-color: ${({theme})=>theme.colors.shape};

  border-radius: 5px;

  margin-bottom:8px;

`;