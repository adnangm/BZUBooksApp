import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WhislistScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>THis is WhislistScreen Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}
      title="goto getails"
      />
       
    </View>
  );
}

export default WhislistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});