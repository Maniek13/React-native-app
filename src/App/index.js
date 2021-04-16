import React from 'react';
import { Button, View} from 'react-native';
import Kalkulator from "src/screens/Kalkulator"; 
import PropTypes from 'prop-types';
import styles from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




class HomeScreen extends React.Component {
    static navigationOptions = { 
        title: 'Welcome',
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View >
                <Button  title="Kalkulator" onPress={() => navigate('Kalkulator')}/>
            </View>
        )
    }
  }



  class CalcScreen extends React.Component {
    static navigationOptions = { 
        title: 'Kalkulator'
      };
    render() {
        return (
                  <Kalkulator/>
          );
        }
  }

 

  const Stack  = createStackNavigator();

  function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: false }} >
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                option
                s={{ title: 'Welcome' }}
                />

                <Stack.Screen
                name="Kalkulator"
                component={CalcScreen}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
  }

export default Container;

HomeScreen.propTypes ={
    navigation: PropTypes.object.isRequired,
};