import React, { useContext, useState } from 'react';
import {View, Text, Button, Image } from 'react-native';
import { cartContext } from '../App';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import Payment from './paymentScreen';

const Basket = () => {
    const {cart, removeProducts} = useContext(cartContext);
    const [mode, setMode] = useState(false);

    const closeButton = () => {
        setMode(false)
    }

    return(
        <View style={{flex:1, backgroundColor:'#dbdbdb'}}>
            {cart.length > 0 ? 
          <ScrollView style={{paddingVertical:10}}>
              {cart.map(product => {
                  return(
                      <View key={product.id}>
                          <View style={{paddingVertical:20, paddingLeft:10 ,display:'flex', flexDirection:'row', backgroundColor:'whitesmoke', shadowColor:'#000', marginTop:20, borderRadius:15}}>
                            <Image source={product.image} style={{height:90, width:80}} />
                            <View style={{paddingLeft:10, marginTop:10}}>
                              <Text style={{fontSize:16,fontWeight:'bold'}}>{product.product}</Text>
                              <View style={{flexDirection:'row', marginTop:30}}>
                                  <TouchableOpacity>
                                    <MaterialIcons 
                                    name="favorite-border"
                                    size={26}
                                    color="orange"
                                    />
                                  </TouchableOpacity>
                                   <TouchableOpacity onPress={() => removeProducts(product)} style={{marginLeft:10}}>
                                        <Ionicons 
                                        name="ios-trash"
                                        size={26}
                                        color="orange"
                                     />
                               </TouchableOpacity>        
                              </View>
                            </View>
                          </View>
                      </View>
                  )
              })}
          </ScrollView>    
          :
          <View>
                 <Text></Text>
           </View>   
        }
        <View>
            {cart.length <= 0 ?
              <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:17}}>Oops! your cart is empty</Text>
                 <Lottie source={require("../assets/4496-empty-cart.json")} autoPlay loop style={{height:150, width:200}} />
              </View>  
    
                :
                <TouchableOpacity onPress = {()=> {setMode(true)}}>
                    <View style={{borderRadius:10, backgroundColor: 'orange', marginBottom:100, height:40, width:255, marginLeft:90, justifyContent:'center', alignItems:'center'}}>
                      <Text style={{color:'white', fontSize:18}}> Checkout</Text>
                    </View>
                </TouchableOpacity>   
        }
        </View>
          <Payment visible={mode} cancel={() => closeButton()} />
        </View>
    );
};

export default Basket;