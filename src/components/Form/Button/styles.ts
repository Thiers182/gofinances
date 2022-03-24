import styled from "styled-components/native";
import {TouchableOpacity} from 'react-native'; //colocado só para resolver o erro de tipagem da aba index do Button
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  width:100%;
  height: 56px;

  align-items:center;
  
  background-color: ${({theme})=> theme.colors.secondary};

  border-radius:5px;
  padding:18px;
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.medium};
  color: ${({theme})=> theme.colors.shape};

  
`;
