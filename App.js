import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DrawerItems from './drawerItems/DrawerContent';
// Drawer components
import HomeScreen from './drawer/homeScreen';
import Basket from './drawerItems/basket';
import Profile from './drawerItems/profile';
import Settings from './drawerItems/settings';

//Screens
import LoginScreen from './screens/login/login';
import Fav from './screens/favourites/fav';
import Services from './screens/services/services';
import SignUp from './screens/signUp/signUp';
import Loading from './screens/welcome/Loading';


export const cartContext = React.createContext({});

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//Custom header function
 const LogoTitle = ({count}) => {
  return(
      <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontSize:23, color:'white' }}>Dejays {""}
            <Text style={{fontFamily:'Palatino-Italic', fontWeight:'bold'}}>Store</Text>
        </Text>
      </View>
  );
};

const App = () => {

  const [cart, setCart] = React.useState([]);
  const [fav, setFav] = React.useState([]);
 
  // Adding products to cart
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

  //adding to favourites
  const addToFav = (product) => {
    const newFav = {
      id: product.id,
      product : product.product,
      price : product.price,
      image: product.image
    }

    const addedFav = [newFav, ...fav]
    setFav(addedFav);
  }

    
  const removeFav = (product) => {
    let newFav = fav.filter((removeItem) => {
      return removeItem.id !== product.id
    })
    setFav(newFav);
  }

// HomeStack 
 const createHomeStack = () =>
        <Stack.Navigator>
              <Stack.Screen 
                 name="Loading"
                 component={Loading}
                 options={{
                   headerShown:false
                 }}
              />
              <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown:false
                }}
              />
              <Stack.Screen 
                 name="SignUp"
                 component={SignUp}
                 options={{
                   headerShown:false
                 }}
              />
              <Stack.Screen 
                  name="Home" 
                  children={createDrawer}
                  options={{
                  headerTitle: () => < LogoTitle  />,
                  headerLeft: ({openDrawer}) => (
                      <TouchableOpacity onPress={() => openDrawer} style={{marginLeft:15}} >
                          <Ionicons 
                            name="ios-menu"
                            size={26}
                            color="white"
                          />
                      </TouchableOpacity>
                  ),
                  headerRight: () => (
                    <TouchableOpacity  style={{ marginRight:20}}>
                        <FontAwesome 
                          name="cart-plus"
                          size={26}
                          color="white"
                         /> 
                        <View style={{position:'absolute', width:16, height:16,  backgroundColor:'tomato', borderRadius:15, justifyContent:'center', alignItems:'center', left:15, bottom:10}}>
                            <Text style={{fontSize:10, color:'white'}}>{cart.length}</Text>
                        </View>   
                    </TouchableOpacity>
                  ), 
                  headerStyle: {
                    backgroundColor:"#30AD88"
                  }
                  }}
              />
               <Stack.Screen 
                  name="Basket"
                  component={Basket}
                  options={{
                    headerTitle: () => (
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                          <Text style={{fontSize:20, color:'white', fontWeight:'bold' }}>Basket
                          </Text>
                        </View>
                    ),
                    headerStyle: {
                      backgroundColor:"#30AD88"
                    },
                    headerBackTitleVisible:false,
                  }}
             />
             <Stack.Screen 
                  name="fav"
                  component={Fav}
                  options={{
                    headerTitle: () => (
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                          <Text style={{fontSize:20, color:'white', fontWeight:'bold' }}>Favourites
                          </Text>
                        </View>
                    ),
                    headerStyle: {
                      backgroundColor:"#30AD88"
                    },
                    headerBackTitleVisible:false,
                  }}
             />
            <Stack.Screen 
               name="services"
               component={Services}
               options={{
                headerTitle: () => (
                    <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                      <Text style={{fontSize:20, color:'white', fontWeight:'bold' }}>Services</Text>
                    </View>
                ),
                headerStyle: {
                  backgroundColor:"#30AD88"
                },
                headerBackTitleVisible:false,
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{ width:32, height:32,borderRadius:16, backgroundColor:"rgba(21,22,48,0.1)", justifyContent:'center',alignItems:'center', marginLeft:20}}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#e9446a"  />
                  </TouchableOpacity>
                ),
               }}
               
            />
        </Stack.Navigator>
   
   // Drawer stack
   const  createDrawer = () =>
        <Drawer.Navigator drawerContent={props => <DrawerItems {...props} />}>
             <Drawer.Screen 
                name="Home" 
                component={HomeScreen}
             />
         </Drawer.Navigator>

      return(
        <cartContext.Provider value={{cart, addProducts, removeProducts, fav, addToFav, removeFav}}>
          <NavigationContainer>
              {createHomeStack()}
          </NavigationContainer>
        </cartContext.Provider>
      );
};

export default App;
