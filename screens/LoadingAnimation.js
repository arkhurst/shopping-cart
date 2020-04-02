import React from 'react';
import { View } from 'react-native';
import LottieAnimation from 'lottie-react-native';
import * as Load from '../assets/27-loading.json';

const LoadingAnim = ({loading}) => {
    return(
        <View style={{justifyContent:'center', alignItems:'center'}}>
            {loading ? (
                <LottieAnimation autoPlay loop source={Load} style={{width:120, height:100}} />
               ):(
                   null
               )}
        </View>

    );
};

export default LoadingAnim;