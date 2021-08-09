import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator
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
      <ProfileStack.Screen name = "ProfileScreen" component={ProfileScreen} 
      options={{
        title: "Profile",
      headerLeft: () => (
        <Icon.Button name="arrow-back" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
      )
      }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;


const ProfileScreen = ({navigations}) => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
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
