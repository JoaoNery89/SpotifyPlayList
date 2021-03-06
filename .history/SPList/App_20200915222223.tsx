import React from 'react'
import { ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='default'/>
      <View style={{flex:1}}>
        <View style={{backgroundColor:'#1DB954'}}>
          <Text style={{fontSize:18, fontWeight:'bold', alignSelf:"center"}}>
            Minha Playlist
          </Text>
        </View>
        <ScrollView style={{flex:1, backgroundColor:'red'}}>
          <View style={{flex:1, alignSelf:'center'}}>
            <Text>
              Lista
            </Text>
          </View>          
        </ScrollView>
      </View>
    </>
  );
};

export default App