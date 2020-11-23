import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './screens/Home';
import Descripcion from './screens/Descripcion';

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Personajes" component={Home} />
			<Stack.Screen name="Descripcion" component={Descripcion} />
		</Stack.Navigator>
	)
}

export default function App() {

	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
