import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation}) => {
  return(
    <SettingsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
    >
      <SettingsStack.Screen name = "SettingsScreen" component={SettingsScreen} 
      options={{
        title: "Settings",
      headerLeft: () => (
        <Icon.Button name="arrow-back" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
      )
      }}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
