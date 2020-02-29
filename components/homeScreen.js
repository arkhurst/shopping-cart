import React, {useState} from 'react';
import {View, Text, Button, ScrollView, Image} from 'react-native';

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
    "product": "Galaxy S7",
    "price" : 650,
    "image" : require('../assets/phone.jpg'),
     inCart:false
  },
  {
    "id": 3,
    "product": "Huawei Mate",
    "price" : 720,
    "image" : require('../assets/phone.jpg'),
     inCart:false
  },
  {
    "id": 4,
    "product": "Razr",
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
]

const ShoppingCart  = () => {

  const [products, setProducts] = useState(ListItem);
  const [cart, updateCart] = useState([]);
  

  const addProducts = (product) => {
    const newProduct = {
      id : product.id,
      product : product.product,
      price : product.price,

    }
    product.inCart = true;

    const updatedCart = [newProduct, ...cart]
    updateCart(updatedCart)
  }

  const removeProducts = (product) => {
    const newCart = product.filter(product => product.id !==id)

    product.inCart = false

    const updatedCart = [newCart, ...cart]

    updateCart(updatedCart);
  }
  // const removeCart = (id) => {
  //   const newCart = newwCart.filter(product => product.id !==id);
  //   const updateNew = [newCart, ...newwCart]
  //   setCart(updateNew);
  // }
  return(
    <ScrollView style={{flexDirection:'', paddingLeft:20,  paddingRight:20, backgroundColor:'white'}}>
      <View>
       <Text style={{fontSize:20, textAlign:"auto", marginTop:10}}>Categories</Text>
          <Text> {cart.length}</Text>
            <ScrollView horizontal={true} style={{marginTop:25, flexDirection:'row'}}>
               <View style={{backgroundColor:'whitesmoke',height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#528AD4", borderWidth:1}}>
                  <Button color="black" title="Phones" />
                </View>
                <View style={{backgroundColor:'whitesmoke', marginLeft: 15,height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#528AD4", borderWidth:1}}>
                  <Button color="black" title="Laptops" />
                </View>
                <View style={{backgroundColor:'whitesmoke', marginLeft: 15,height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#528AD4", borderWidth:1}}>
                  <Button color="black" title="Chargers" />
                </View>
                <View style={{backgroundColor:'whitesmoke', marginLeft: 15,height:50, width:120, justifyContent:'center', borderRadius:10, borderColor:"#528AD4", borderWidth:1}}>
                  <Button color="black" title="Earphones" />
                </View>
           </ScrollView>
      </View>
      <Text style={{fontSize:20,marginTop:50}}>Shopping List</Text>
      {products.map(product => {
        return(
          <View key={product.id} >
            <View style={{ alignItems:'center', backgroundColor:'whitesmoke', justifyContent:'center', marginTop:20, paddingTop:30, borderRadius:8}}>
               <Image source={product.image} style={{width:250, height:150}} />
               <View style={{alignItems:'center', marginTop:10, flexDirection:'row', justifyContent:'space-between', paddingRight:20}}>
                 <Text style={{fontSize:15, fontWeight:'bold'}}> {product.product}</Text>
                 <View style={{paddingLeft:100}}>
                   <Text> GHS  {product.price}</Text>
                 </View>
               </View>
               <View style={{flexDirection:'row'}}>
                  <View style={{marginBottom:20, marginTop:20, borderRadius:5}}>
                    {product.inCart ? (
                      <View style={{ }}>
                           <Button color="red"   title=" remove from cart" onPress = {() => removeProducts(product)} />
                      </View> 
                    ) : (
                      <Button color="black"   title="add to cart" onPress = {() => addProducts(product)} />
                    )
                     
                  }
                   
                 </View> 
               </View>
              
            </View>
          </View>
        )
      })} 
    </ScrollView>
  );
};

export default ShoppingCart;