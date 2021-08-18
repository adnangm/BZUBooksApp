import React from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

import MainTab from './MainTab';

const Drawer = createDrawerNavigator();

const AppStack = () => {

  return (
    <View style={{flex: 1}}>
      {/* <StatusBar backgroundColor='#063b91' barStyle="light-content"/> */}
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="MainTab" component={MainTab} />

        </Drawer.Navigator>
   
    </View> 
  );
}

export default AppStack;
