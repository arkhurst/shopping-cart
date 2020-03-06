import React, { useState, useContext } from 'react';
import { View, Text, Button, ScrollView, Image, Animated } from 'react-native';

//importing the cartContext
import {cartContext} from '../App'

const ListItem = [
  {
    "id": 1,
    "product": "iPhone 6s",
    "price" : 950,
    "image" : require('../assets/phone.jpg'),
     inCart:false
  },
  {
    "id": 2,
    "product": "Galaxy Tab",
    "price" : 650,
    "image" : require('../assets/galaxyTab.jpg'),
     inCart:false
  },
  {
    "id": 3,
    "product": " Surface 2 ",
    "price" : 720,
    "image" : require('../assets/images.jpg'),
     inCart:false
  },
  {
    "id": 4,
    "product": "Backpack",
    "price" : 500,
    "image" : require('../assets/phone.jpg'),
     inCart:false
  },
  {
    "id": 5,
    "product": "Oppo Reno",
    "price" : 690,
    "image" : require('../assets/phone.jpg'),
     inCart:false
  },
  {
    "id": 6,
    "product": "Nokia",
    "price" : 690,
    "image" : require('../assets/phone.jpg'),
     inCart:false
  }
  
]

const ShoppingCart  = (props) => {

  const [products, setProducts] = useState(ListItem);
  const {addProducts, removeProducts} = useContext(cartContext);
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue:1,
        duration:10000
      }
    ).start();
  }, [])
  
  return(
    <ScrollView style={{flexDirection:'',   backgroundColor:'#fofofo'}}>
      <View style={{backgroundColor:"rgba(236,231,231,0.856)", paddingLeft:5, borderRadius:20}}>
          <View style={{flexDirection:'row',paddingHorizontal:15, marginTop:19, justifyContent:'space-between', backgroundColor:"rgba(236,231,231,0.856)", paddingLeft:5, borderRadius:20}}>
             <Text style={{marginLeft:10, fontSize:24, fontWeight:'400',marginTop:5,  textAlign:'center', color:"#40617a"}}>Categories</Text>
             <View style={{borderColor:"black", backgroundColor:'white', borderWidth:1, borderRadius:10}}>
                <Button title="View all" onPress={() => props.navigation.navigate("Product Category")}/>
             </View>
           </View>
            <ScrollView horizontal={true} style={{marginTop:25, flexDirection:'row'}}>
               <View style={{backgroundColor:'whitesmoke',height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#30AD88", borderWidth:1.5}}>
                  <Button color="black" title="Phones" />
                </View>
                <View style={{backgroundColor:'whitesmoke', marginLeft: 15,height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#30AD88", borderWidth:1.5}}>
                  <Button color="black" title="Laptops" />
                </View>
                <View style={{backgroundColor:'whitesmoke', marginLeft: 15,height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#30AD88", borderWidth:1.5}}>
                  <Button color="black" title="Chargers" />
                </View>
                <View style={{backgroundColor:'whitesmoke', marginLeft: 15,height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#30AD88", borderWidth:1.5}}>
                  <Button color="black" title="Earphones" />
                </View>
           </ScrollView>
      </View>
      <Text style={{fontSize:20,marginTop:50, fontWeight:'400', textAlign:'center', color:"#40617a"}}>Available Products</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', paddingLeft:5, marginTop:20}}>
      {products.map(product => {
        return(
          <View key={product.id} style={{marginTop:15, display:'flex', shadowColor:'#000',marginLeft:10, shadowOffset:{width:0, height:1}, shadowOpacity:0.1, borderRadius:10}} >
            <View style={{flexDirection:'column', flex:1, paddingTop:30}}>
              <View style={{ }}>
                <Image source={product.image} style={{width:185, height:180, borderRadius:10}} />
              </View>
               <View style={{flex:-5, flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
                 <Text style={{fontSize:15, fontWeight:'bold'}}> {product.product}</Text>
                 <Text> GHS  {product.price}</Text>
               </View>
               <View style={{flexDirection:''}}>
                  <View style={{marginBottom:20, marginTop:20, borderRadius:5}}>
                    {product.inCart ? (
                      <View style={{backgroundColor:'#F77752', borderRadius:10 }}>
                           <Button color="white" title=" remove from cart" onPress = {() => removeProducts(product)} />
                      </View> 
                    ) : (
                      <View style={{backgroundColor:"#30AD88", borderRadius:5}}>
                          <Button color="white" title="add to cart" onPress = {() => addProducts(product)} />
                      </View>      
                    )        
                  }    
                 </View> 
               </View> 
            </View>
          </View>
        )
      })} 
      </View>
    </ScrollView>
  );
};

export default ShoppingCart;
