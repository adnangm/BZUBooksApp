import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import SearchScreen from './SearchScreen';

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#063b91',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStackScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarColor: '#063b91',
          tabBarIcon: ({ color }) => (
            <MIcon name="category" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#063b91',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#063b91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Books Library',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#063b91" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const CategoryStackScreen = ({navigation}) => (
<CategoryStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#063b91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CategoryStack.Screen name="Categories" component={CategoryScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#063b91" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</CategoryStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#063b91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <SearchStack.Screen name="Search A Book" component={SearchScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#063b91" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </SearchStack.Navigator>
  );
  
