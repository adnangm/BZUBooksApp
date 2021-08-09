import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';


const SupportStack = createStackNavigator();

const SupportStackScreen = ({navigation}) => {
  return(
    <SupportStack.Navigator
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
      <SupportStack.Screen name = "SupportScreen" component={SupportScreen} 
      options={{
        title: "Support",
      headerLeft: () => (
        <Icon.Button name="arrow-back" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
      )
      }}
      />
    </SupportStack.Navigator>
  );
}

export default SupportStackScreen;

const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <WebView
        source={{ uri: 'https://www.bzu.edu.pk/v2_contactus.php' }}
        style={{ marginTop: 0 }}
      />
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});



