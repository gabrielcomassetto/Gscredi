import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Recsenha from './components/recsenha';
import Ajuda from './components/ajuda';
import Home from './components/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Recuperar senha' component={Recsenha} />
        <Stack.Screen name='Ajuda' component={Ajuda} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


