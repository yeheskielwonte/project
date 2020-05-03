import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Header } from 'react-native-elements';
import StackNav from './navigator/StackNav';

export default function App() {
  return (
    <View style={{ flex: 1}}>

      <View style={{borderBottomWidth:1}}>
      <Text style={style.DATA}>DATA</Text>
      <Image
        style={style.covid19}
        source={require('./assets/covid19.png')}
      />
      </View>
      
      <StackNav/>
    </View>
  );
}

const style = StyleSheet.create({
  covid19:{
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom:5
  },
  DATA:{
    fontSize:25,
    fontWeight: 'bold',
    color: "#000000",
    alignSelf: 'center',
    fontFamily:'monospace',
    marginTop:25,
    marginBottom:5
  },
})
