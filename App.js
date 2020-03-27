import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


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
import Loading from './screens/welcome/loading';
// import Phones from './tabs/phones';
// import Tablets from './tabs/tablets';

export const cartContext = React.createContext({});

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

//Custom header function
 const LogoTitle = ({count}) => {
  return(
      <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontSize:23, color:'white', }}>Dejays {""}
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
              headerLeft: ({navigation}) => (
                  <TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginLeft:15}} >
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
                    color="white" /> 
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
              {/* <Stack.Screen  
              name="Product Category"
              children={createTopTab}
              options={{
                headerStyle: {backgroundColor:'fff'                    
              }}}
              /> */}
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
                      <Text style={{fontSize:20, color:'white', fontWeight:'bold' }}>Services
                      </Text>
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

//Function for Tabs for  item categories
    // const createTopTab = () => 
    //      <MaterialTopTab.Navigator>
    //          <MaterialTopTab.Screen
    //            name="Phones"
    //            component={Phones}
    //            options={{title:'Phones'}}
    //            tabBarOptions={{ 
    //              labelStyle: { fontSize: 12 },
    //              tabStyle: { width: 100 },
    //              style: { backgroundColor: 'powderblue' }
    //           }}
    //          />
    //          <MaterialTopTab.Screen
    //             name="Tablets"
    //             component={Tablets}
    //             options={{title:'Tablets'}}
    //             tabBarOptions={{ 
    //               labelStyle: { fontSize: 12 },
    //               tabStyle: { width: 100 },
    //               style: { backgroundColor: 'powderblue' }
    //           }}
    //          />
    //      </MaterialTopTab.Navigator>
   
   // Drawer stack
   const  createDrawer = () =>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor:"#30AD88"
          }}
        >
        {/* Drawer Items */}
             <Drawer.Screen 
                name="Home" 
                component={HomeScreen}
                options = {{
                  drawerIcon: () => <Ionicons name = "ios-home" size={26} color="#30AD88" />,
                }}
             />
             <Drawer.Screen 
                name="Basket" 
                component={Basket}
                options = {{
                  drawerIcon: () => <Ionicons name = "ios-basket" size={26} color="#30AD88" />
                }}
                />
            <Drawer.Screen 
                name="Account" 
                component={Profile}
                options = {{
                  drawerIcon: () => <FontAwesome name = "user-o" size={26} color="#30AD88" />
                }}
                />
            <Drawer.Screen 
                name="Settings" 
                component={Settings}
                options = {{
                  drawerIcon: () => <Ionicons name = "ios-settings" size={26} color="#30AD88" />
                }}
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
