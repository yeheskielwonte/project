import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import StackNav from './navigator/StackNav';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundColor="white"
        centerComponent={
        <Image
          source={require('./assets/TestLogo.png') }
          style={{ height: 40, width: 110 }}
        />}
        leftComponent={ 
          <TouchableOpacity>
            <Image
              source={require('./assets/account.png')}
            />
          </TouchableOpacity>
        }
      />
      <StackNav/>
    </View>
  );
}