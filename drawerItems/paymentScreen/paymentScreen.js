import React, { useState, useContext, useEffect } from 'react';
import {View, Text, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';

import { cartContext } from '../../App';
import Loading from './loading';

const PaymentScreen = ({visible, cancel}) => {

    let data = [{
        value: 'MTN Mobile Money',
      }, {
        value: 'Visa Card',
      }, {
        value: 'Credit Card',
      }];

    const {cart} = useContext(cartContext)
    const [paymentType, setPayment] = useState(false);
    const [done, setDone] = useState(undefined);
    const [loading, setLoading] = useState(undefined);

    useEffect(() =>{
        makePayment();
    }, []);

    const makePayment = () => {
        setDone(undefined);
        setLoading(undefined);

        setTimeout(() => {
            fetch('https://aws.random.cat./meow')
            .then(res => res.json())
            .then(data => data.file);
            setLoading(true);
            setTimeout(() => {
                setDone(true);
            },1000)
        }, 2500)
    }
    
    const changeState = () => {
        paymentType = true
        setPayment(paymentType)
    }
   
    const getTotalPrice = () => {
        let price = 0.0;

        for(let i=0; i < cart.length; i++){
            price += cart[i].product[0].price
        }
        return price
    }
    return(
        <Modal visible={visible} animationType="slide" >
          <View style={{flex:1, flexDirection:'column',padding:30, marginTop:80}}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{ fontSize: 24 }}>Payment Options</Text>
                <TouchableOpacity style={{backgroundColor:'#fofofo'}} onPress={cancel}>
                    <Ionicons 
                    name="ios-close"
                    size={26}
                    color="red"
                    />
                </TouchableOpacity>
              </View>
               <Dropdown
                 label="Select payment method"
                 data={data}
               />
              <View style={{backgroundColor:"#30AD88",marginTop:30, alignItems:'center', justifyContent:'center', height:80, borderTopEndRadius:20, borderTopStartRadius:20, overflow:'hidden'}}>
                  <Text style={{color:'white', fontSize:20, fontWeight:"bold"}}>Total Order</Text>
                  <Text style={{color:'white', marginTop:10}}> ────────────────────</Text>
              </View>
              <View style={{overflow:'visible', alignItems:'center', justifyContent:'center', height:'auto',overflow:'hidden'}}>
                  {cart.map( product => {
                      return(
                          <View key={product.id} style={{flexDirection:'row', alignSelf:'flex-start', marginTop:10}}>
                              <Text style={{fontSize:17, fontWeight:'600'}}>{product.product}</Text>
                              <Text style={{marginLeft:220,fontSize:17}}>{product.price}</Text>
                           </View>   
                      )
                  })}
                  <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:10}}>
                      <Text style={{fontSize:17, fontWeight:'400'}}> Number of Items</Text>
                      <Text style={{marginLeft:180,fontSize:17}}>1</Text>
                  </View>
              </View>
              <View style={{backgroundColor:"whitesmoke", flexDirection:'row',paddingHorizontal:10, marginTop:15, alignItems:'center', justifyContent:'space-between', height:40, borderBottomEndRadius:20, borderBottomStartRadius:20, overflow:'hidden'}}>
                  <Text style={{color:'black', marginTop:10,color:'#0A3C85', fontWeight:'bold'}}> Total Purchase</Text>
                     <Text style={{ fontSize: 17 }}>
						{' '}
						<Text style={{ color: 'orange' }}>USD </Text>
						{getTotalPrice()}
					</Text>
              </View>
              <View style={{width:160, height:40, backgroundColor:'#30AD88', marginTop:70, marginLeft:100, borderRadius:5}}>
                  <Button onPress={makePayment} title="Proceed" color="white" />
                  {!done ? (
                      <Loading loading={loading} />
                  ) : (
                      <Text></Text>
                  )}
              </View>
          </View>
        </Modal>
    );
};

export default PaymentScreen;