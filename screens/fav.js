import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image  } from 'react-native';
import { cartContext } from '../App';
import {Ionicons} from '@expo/vector-icons';

const Fav = ({ navigation }) => {

    const { fav, removeFav} = useContext(cartContext);
    
    return(
        <View style={{flex:1, backgroundColor:'#dbdbdb'}}>
        {fav.length > 0 ? 
      <ScrollView style={{paddingVertical:10}}>
          {fav.map(product => {
              return(
                  <View key={product.id}>
                      <View style={{paddingVertical:20, paddingLeft:10 ,display:'flex', flexDirection:'row', backgroundColor:'whitesmoke', shadowColor:'#000', marginTop:20, borderRadius:15}}>
                        <Image source={product.image} style={{height:90, width:80}} />
                        <View style={{paddingLeft:10, marginTop:10}}>
                          <Text style={{fontSize:16,fontWeight:'bold'}}>{product.product}</Text>
                          <View style={{flexDirection:'row', marginTop:30}}>
                               <TouchableOpacity onPress={() => removeFav(product)} style={{marginLeft:10}}>
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
      <View style={{alignItems:'center', justifyContent:'center', paddingVertical:10}}>
          <Text style={{fontSize:17}}>You haven't saved anything yet</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={{marginTop:50}}>
                <View style={{borderRadius:10, backgroundColor: 'orange', height:40, width:255,justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontSize:18}}> Continue Shopping</Text>
                </View>
            </TouchableOpacity>   
       </View>    
    }
 
    </View>
    );
};

export default Fav;