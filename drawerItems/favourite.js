import React from 'react';
import { View, Text, Button } from 'react-native';

const Favourites = (props) => {
    return(
      
          <View style={{flexDirection:'row',paddingHorizontal:15, marginTop:19, justifyContent:'space-between', paddingLeft:5, borderRadius:20}}>
             <Text style={{marginLeft:10, fontSize:24, fontWeight:'400',marginTop:5,  textAlign:'center', color:"#40617a"}}>Categories</Text>
            
           </View>
     
    );
};

export default Favourites;