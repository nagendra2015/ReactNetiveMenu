import * as React from 'react';
import { Text, View } from 'react-native';

export default function DetailsScreen({navigation}) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text 
       onPress={()=>navigation.navigate('Home')} style={{fontSize: 26,fontWeight:'bold' }} >
        my Details Screen</Text>
        
      </View>
    );
  }