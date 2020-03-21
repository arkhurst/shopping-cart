import React, { useState, useContext } from 'react';
import { View, Text, Button, ScrollView, Image, Animated } from 'react-native';
import Carousel from 'react-native-looped-carousel';
//importing the cartContext
import {cartContext} from '../App'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = [
  {
    "id": 1,
    "product": "iPhone 6s",
    "price" : 950,
    "image" : require('../assets/galaxyTab.jpg'),
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
    "image" : require('../assets/galaxyTab.jpg'),
     inCart:false
  },
  {
    "id": 4,
    "product": "Backpack",
    "price" : 500,
    "image" : require('../assets/galaxyTab.jpg'),
     inCart:false
  },
  {
    "id": 5,
    "product": "Oppo Reno",
    "price" : 690,
    "image" : require('../assets/galaxyTab.jpg'),
     inCart:false
  },
  {
    "id": 6,
    "product": "Nokia",
    "price" : 690,
    "image" : require('../assets/galaxyTab.jpg'),
     inCart:false
  }
  
]

const HotDeals = [
  {
    "id":0,
    "title":"Canon-Camera",
    "images": require('../assets/canon.png')
  },
  {
    "id":2,
    "title":"iPad-Air",
    "images":   require('../assets/ipad-Air.jpg')
 },
  {
    "id":3,
    "title":"iPhone X",
    "images":   require('../assets/iphoneX.png')
  },
  {
    "id":4,
    "title":"Mac Book",
    "images":   require('../assets/macBook.jpg')
  },
  {
    "id":5,
    "title":"Mini Camera",
    "images":   require('../assets/mini-camera.jpg')
  },
  {
    "id":6,
    "title":"Xiaomi-Mi8",
    "images":   require('../assets/Xiaomi-Mi8.png')
  }
]

const ShoppingCart  = (props) => {

  const [products, setProducts] = useState(ListItem);
  const [hotDeals, setHotDeals] = useState(HotDeals)
  const {addProducts, removeProducts} = useContext(cartContext);

 
  
  return(
    <ScrollView style={{flexDirection:'',   backgroundColor:'white'}}>
            <Text style={{fontSize:24,marginTop:20, fontWeight:'400', marginLeft:10, color:"#40617a"}}>Hot Deals
              <Text style={{color:"#FC1055",fontWeight:'400',fontSize:16,fontFamily:'GillSans-Italic'}}>
                {""} 50% off 
              </Text>
            </Text>
      <Carousel 
        style={{flex:1, width:390, height:240, backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}}} 
        delay={3000}
        autoplay
        isLooped
        swipe
        bullets={true}
      > 
        {hotDeals.map(hotDeal => (
          <View key={hotDeal.id} style={[
            {  
            justifyContent:'center',
            alignItems:'center',
            marginLeft:14,
            marginTop:20,
            },
            {
                width:376, 
                height:200
            }
                ]
                }>
              <Image style={{width:370, height:220}} source={hotDeal.images} />
              <View style={{ position: 'absolute',left: 5, bottom: 30, backgroundColor: '#30AD88', marginBottom: 135, padding: 10, width:"auto", height:43, borderTopRightRadius:20, borderBottomRightRadius:20}}>
                <Text style={{fontWeight:'bold', color:'white'}}>{hotDeal.title}</Text>
              </View>
          </View>
        ))}
      </Carousel>
     
      <Text style={{fontSize:24,marginTop:50, fontWeight:'400', marginLeft:10, color:"#40617a"}}>Available Products</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', paddingLeft:5, marginTop:20}}>
      {products.map(product => {
        return(
          <View key={product.id} style={{marginTop:15, display:'flex', shadowColor:'#000',marginLeft:10, shadowOffset:{width:0, height:1}, shadowOpacity:0.1, borderRadius:10}} >
            <View style={{flexDirection:'column', flex:1,backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, paddingTop:30}}>
              <View style={{ }}>
                <Image source={product.image} style={{width:190, height:190, borderRadius:10}} />
              </View>
               <View style={{flex:-5, flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
                 <Text style={{fontSize:15, fontWeight:'bold'}}> {product.product}</Text>
                   <Text> GHS {""}
                     <Text style={{color:'tomato', fontWeight:'bold'}}>
                      {product.price}
                     </Text>
                   </Text>
               </View>
               <View style={{flexDirection:''}}>
                  <View style={{marginBottom:20, marginTop:10, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                    {product.inCart ? (
                           <TouchableOpacity onPress = {() => removeProducts(product)} style={{width:90, height:25, backgroundColor:'#F77752', justifyContent:'center', alignItems:'center', borderRadius:5}}>
                             <Text style={{fontWeight:'bold', color:'white'}}>remove</Text>
                           </TouchableOpacity>
                     
                    ) : (
                      <TouchableOpacity onPress = {() => addProducts(product)}  style={{backgroundColor:"#30AD88",width:90, height:25, borderRadius:5, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', color:'white'}}>add to cart</Text>
                      </TouchableOpacity>      
                    )        
                  }  

                     <TouchableOpacity   style={{backgroundColor:"white",width:90, height:25, borderRadius:5, justifyContent:'center',alignItems:'center', borderWidth:1, marginTop:10}}>
                            <Text style={{fontWeight:'bold', color:'black'}}>buy</Text>
                      </TouchableOpacity>      
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
