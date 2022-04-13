import styled from 'styled-components/native'; //Coloquei o native pois caso não seja colocado ele vai trazer elementos da web por exemplo
import { FlatList, FlatListProps } from 'react-native'; // será importado pois não será mais usado o 'styled.Flatlist', e sim, vai ser criada uma tipagem personalizada para essa Flatlist
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'; // biblioteca responsável pelas proporções dos objetos, ou seja se eu abrir em um outro dispositivo os tamanhos vão ser adaptados
import {Feather} from '@expo/vector-icons';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper'; // vai lidar com o tamanho da barra de status
import { BorderlessButton} from 'react-native-gesture-handler'
import {DataListProps} from '.'; // o ponto apenas significa que vou importar dessa pasta

// quando eu coloco o export na frente quer dizer que ele pode ser exportado 
//Letra maiúcula do Container é pra indicar que é um componente
export const Container = styled.View` 
  flex:1;
  background-color: ${({theme}) => theme.colors.background};

`;

// na altura foi usado um tamanho relativo para evitar que em outros dispositivos essa altura mude
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px; 
  justify-content: center;
  align-items: flex-start;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row; /* colocar elementos alinhados em uma linha*/
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: ${RFValue(0)}px ${RFValue(24)}px; /*O primeiro número vai se referir ao espaçamento da parte sup e inf e o segundo número vai se 
  referir ao espaçamento direita-esquerda */
  margin-top: ${getStatusBarHeight() + RFValue(28)}px; /* Margem dada levndo em consideração a barra de status do dispositivo físico */
  flex-direction: row;
  justify-content: space-between;/*vai espaçar os elementos respeitando o padding anterior */
  align-items: center;

`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  margin-left: 18px; /*Distanciamento de elementos */
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px; /*Eu mudei de 18 para 16 */
  font-family: ${({theme}) => theme.fonts.regular};

`;
export const UserName = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(16)}px; /*Eu mudei de 18 para 16 */
font-family: ${({theme}) => theme.fonts.bold};
`;

export const LogoutButton = styled(BorderlessButton)``;


export const Icon = styled(Feather)` /* como o Feather não é nativo do react native posso envolver por parênteses pra usar os componentes da biblioteca que preciso estilizar! */
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px; 
`;

// o .attrs é a maneira de acessar o ScrollView e estiliza-lo
export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true, /* utilizado para colocar os cards lado a lado. o Default e true, logo poderiaos omitir o true colocado */
  showsHorizontalScrollIndicator: false, /*esconde a barra de rolagem quando o usuário rola os cards */
  contentContainerStyle: {paddingHorizontal: 24} /*adiciona uma estilização do conteúdo, nesse caso foi dado um espaçamento do canto da tela de 24 */
})`
  width: 100%;/*cartão vai ocupar 100% da tela */
  position: absolute;/*coloca o cartão na parte superior */
  margin-top: ${RFPercentage(24)}px;
`;

export const Transactions = styled.View`
  
  flex: 1; /*para ocupar todo o espaço restante da tela */ 
  padding: 0 24px;

  margin-top: ${RFPercentage(15)}px; /* O RFPercentege foi utilizado para dar um afastamento de forma proporcional! */
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};

  margin-bottom: 16px;
`;

//o Flatlist entre parênteses quer dizer que vai ser criada uma tipagem personalizada para o mesmo
export const TransactionList = styled(FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>).attrs({
  showsVerticalScrollIndicator:false, /*tirando a visualização da barra de rolagem vertical */
  contentContainerStyle: {
      paddingBottom: getBottomSpace() /*utilizado para identificar o limite inferior do dispositivo e não cortar os cartões */
  }
})``;

