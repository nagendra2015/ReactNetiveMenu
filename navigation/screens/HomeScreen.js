import * as React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text 
       onPress={()=>alert('This is home screen')} style={{fontSize: 26,fontWeight:'bold' }} >
        My  Home Screen </Text>
        <Text  style={{fontSize: 26,fontWeight:'bold' }}>----Welcome-----</Text>
        
      </View>
    );
  }