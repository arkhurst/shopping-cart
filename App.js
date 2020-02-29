import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, Button, ScrollView, Image} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/homeScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

const LogoTitle = () => {
  return(
    <View>
      <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontSize:25, color:'white', fontFamily:'Palatino-Italic'}}>Products</Text>
      </View>
      <View style={{ width:16, height:16,  backgroundColor:'red', borderRadius:15, justifyContent:'center', alignItems:'center' , marginLeft:380, flexDirection:'row'}}>
        <Text style={{fontSize:10, color:'white'}}>2</Text>
      </View>
    </View>
    
  );
};

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen 
         name="Home" 
         component={HomeScreen}
         options={{
           headerStyle: {
            backgroundColor: 'whitesmoke',
          },
          headerTitle: () => < LogoTitle />,
          headerLeft: () => (
              <TouchableOpacity style={{marginLeft:15, marginBottom:5}} >
                <Ionicons 
                name="ios-menu"
                size={26}
                color="white"
              />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight:20, marginBottom:5}}>
               <FontAwesome 
               name="cart-plus"
               size={26}
               color="white" />    
           </TouchableOpacity>
          ), 
          headerStyle: {
            backgroundColor:"#30AD88"
          }
          }}
         />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;