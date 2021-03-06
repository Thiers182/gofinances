import React from 'react';
import {Platform} from 'react-native'
import {useTheme} from 'styled-components'
import {MaterialIcons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const { Navigator, Screen} = createBottomTabNavigator();
 
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

export function AppRoutes(){
  const theme = useTheme(); // criado para conseguir acessar os themas da minha aplicação

  return(
    <Navigator /* Navigator seria a caixa na qual a screen está guardada */
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 72,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    
    >
      <Screen 
        name = "Listagem"
        component={Dashboard} 
        options={{
          tabBarIcon: (({size, color}) => 
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          
          )
        }}
      />

      <Screen 
        name = "Cadastrar"
        component={Register} 
        options={{
          tabBarIcon: (({size, color}) => 
            <MaterialIcons
              name='attach-money'
              size={size}
              color={color}
            />
          
          )
        }}
      />

      <Screen 
        name = "Resumo"
        component={Register} 
        options={{
          tabBarIcon: (({size, color}) => 
            <MaterialIcons
              name='pie-chart'
              size={size}
              color={color}
            />
          
          )
        }}
      />
    </Navigator>
  )
}