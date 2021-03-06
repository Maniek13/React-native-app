import React from 'react';
import { Button, View, ScrollView} from 'react-native';
import Kalkulator from "src/screens/Kalkulator"; 
import Data from "src/screens/Data"; 
import PropTypes from 'prop-types';
import styles from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View >
                <Button  title="Kalkulator" onPress={() => navigate('Kalkulator')}/>
                <Button  title="Data" onPress={() => navigate('Data')}/>
            </View>
            
        )
    }
  }

  class CalcScreen extends React.Component {
    render() {
        return (
            <Kalkulator/>
          );
        }
  }

  class DataScreen extends React.Component {
    render() {
      return (
        <ScrollView style = {styles.scroll_view}>
          <Data/>
        </ScrollView>
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
                options={{ 
                  title: 'Welcome',
                  headerStyle: { backgroundColor: '#f4511e' },
                  headerTintColor: '#fff',
                  headerTitleStyle: { alignSelf: 'center' }
                }}
                />

                <Stack.Screen
                name="Kalkulator"
                component={CalcScreen}
                options={{ 
                  headerStyle: { backgroundColor: '#f4511e' },
                  headerTintColor: '#fff'
                }}
                />

                <Stack.Screen
                name="Data"
                component={DataScreen}
                options={{ 
                  headerStyle: { backgroundColor: '#f4511e' },
                  headerTintColor: '#fff'
                }}
                />


                
            </Stack.Navigator>
        </NavigationContainer>
    );
  }

export default Container;

HomeScreen.propTypes ={
    navigation: PropTypes.object.isRequired,
};