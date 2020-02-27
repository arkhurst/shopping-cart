import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './homeScreen'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
     
    </Drawer.Navigator>
  );
};

export default MyDrawer;