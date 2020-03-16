import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Drawer components
import HomeScreen from './drawer/homeScreen';
import Basket from './drawerItems/basket';
import Categories from './drawerItems/favourite';
import Profile from './drawerItems/profile';
import Settings from './drawerItems/settings';
import Phones from './tabs/phones';
import Tablets from './tabs/tablets';

export const cartContext = React.createContext({});

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

//Custom header function
 const LogoTitle = ({count}) => {
  return(
    <View>
      <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontSize:25, color:'white', fontFamily:'Palatino-Italic'}}>Shopping Cart</Text>
      </View>
      <View style={{ width:16, height:16,  backgroundColor:'red', borderRadius:15, justifyContent:'center', alignItems:'center' , marginLeft:380, flexDirection:'row'}}>
        <Text style={{fontSize:10, color:'white'}}>{count}</Text>
      </View>
    </View>
    
  );
};

const App = () => {

  const [cart, setCart] = React.useState([]);

  const addProducts = (product) => {
    const newProduct = {
      id : product.id,
      product : product.product,
      price : product.price,
      image: product.image

    }
    product.inCart = true;

    const updatedCart = [newProduct, ...cart]
    setCart(updatedCart);
  }
  
  const removeProducts = (product) => {
    let newCart = cart.filter((removeItem) => {
      return removeItem.id !== product.id
    })

    setCart(newCart)
    product.inCart = false;
  }

// HomeStack 
 const createHomeStack = (props) =>
        <Stack.Navigator>
              <Stack.Screen 
              name="Home" 
              children={createDrawer}
              options={{
                headerStyle: {
                backgroundColor: 'whitesmoke',
              },
              headerTitle: () => < LogoTitle count={cart.length} />,
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
                <TouchableOpacity  style={{ marginRight:20, marginBottom:5}}>
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
              <Stack.Screen  
              name="Product Category"
              children={createTopTab}
              options={{
                headerStyle: {backgroundColor:'fff'                    
              }}}
              />
        </Stack.Navigator>

//Function for Tabs for  item categories
    const createTopTab = () => 
         <MaterialTopTab.Navigator>
             <MaterialTopTab.Screen
               name="Phones"
               component={Phones}
               options={{title:'Phones'}}
               tabBarOptions={{ 
                 labelStyle: { fontSize: 12 },
                 tabStyle: { width: 100 },
                 style: { backgroundColor: 'powderblue' }
              }}
             />
             <MaterialTopTab.Screen
                name="Tablets"
                component={Tablets}
                options={{title:'Tablets'}}
                tabBarOptions={{ 
                  labelStyle: { fontSize: 12 },
                  tabStyle: { width: 100 },
                  style: { backgroundColor: 'powderblue' }
              }}
             />
         </MaterialTopTab.Navigator>
   
   // Drawer stack
   const  createDrawer = () =>
        <Drawer.Navigator>
        {/* Drawer Items */}
             <Drawer.Screen 
                name="Home" 
                component={HomeScreen}
                options = {{
                  drawerIcon: () => <Ionicons name = "ios-home" size={26} color="green" />,
                }}
             />
            <Drawer.Screen 
                name="Favourites" 
                component={Categories}
                options = {{
                  drawerIcon: () => <MaterialIcons  name = "favorite" size={20} color="green" />,
                }}
            />
             <Drawer.Screen 
                name="Basket" 
                component={Basket}
                options = {{
                  drawerIcon: () => <Ionicons name = "ios-basket" size={26} color="green" />
                }}
                />
            <Drawer.Screen 
                name="Account" 
                component={Profile}
                options = {{
                  drawerIcon: () => <MaterialIcons name = "account-circle" size={26} color="green" />
                }}
                />
            <Drawer.Screen 
                name="Settings" 
                component={Settings}
                options = {{
                  drawerIcon: () => <Ionicons name = "ios-settings" size={26} color="green" />
                }}
             />
          </Drawer.Navigator>


      return(
        <cartContext.Provider value={{cart, addProducts, removeProducts}}>
          <NavigationContainer>
              {createHomeStack()}
          </NavigationContainer>
        </cartContext.Provider>
      );
 
};

export default App;
