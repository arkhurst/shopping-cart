import React from 'react';
import { View, Text } from 'react-native';
import LottieAnimation from 'lottie-react-native';
import * as paymentSuccessful from '../../assets/16271-payment-successful.json';
import * as LoadingAnimation from '../../assets/animation_login.json';

const Loading = ({loading}) => {
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            {!loading ? (
                <LottieAnimation  source={LoadingAnimation} autoPlay loop style={{height:100, width:100, top:10}}/>
            ) : (
                <LottieAnimation  source={paymentSuccessful} autoPlay loop style={{height:200, width:200, top:20}}/>
            )}
           
        </View>
    );
};

export default Loading;