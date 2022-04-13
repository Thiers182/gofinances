//esse arquivo app.tsx é nosso primeiro arquivo, tudo passa por aqui

//Dicas de organização: deixar as importações de biblioteca no topo
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
  
//Dicas de organização: deixar as importações de componentes mais abaixo
//import {Register} from './src/screens/Register'; //Por padrão vai ler o arquivo index da pasta, não necessitando colocar  o '/index'
//import {CategorySelect} from './src/screens/CategorySelect'; // substituiu a linha acima para que possamos visulizar a nova parte que está sendo criada
//Como foi criado um mapa de rotas através do 'routes' não preciso mais a importação de tela por tela
import 'react-native-gesture-handler';

import theme from './src/global/styles/theme' //nesse caso não preciso envolver por chaves

import { NavigationContainer} from '@react-navigation/native'

import {AppRoutes} from './src/routes/app.routes' // importando as rotas criadas

import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); //carregar as fontes

if(!fontsLoaded){
  return <AppLoading/>
} //se o fontsLoaded não for verdadeiro, ou seja, enquanto a fonte não esteja ainda carregada, o Apploading não vai permitir que abra sem carregar as fotnes que colocamos.

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
            
            <NavigationContainer /*Aqui dentro vão as rotas de navegação*/>

              <AppRoutes/>

            </NavigationContainer>
        
        </ThemeProvider>
    </GestureHandlerRootView>

    )
}


