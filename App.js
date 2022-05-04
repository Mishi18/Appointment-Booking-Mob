import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {Home, Seller, Sellers, Reservations} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Reservations"
          component={Reservations}
          options={{title: 'My Reservations'}}
        />
        <Stack.Screen
          name="Sellers"
          component={Sellers}
          options={{title: 'Select Seller'}}
        />
        <Stack.Screen name="Seller" component={Seller} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
