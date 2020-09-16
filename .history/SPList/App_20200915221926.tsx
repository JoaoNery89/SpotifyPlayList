import React from 'react'
import { ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='default'/>
      <View style={{flex:1}}>
        <View style={{flex:0, backgroundColor:'Green', alignSelf:"center"}}>
          <Text style={{fontSize:18, fontWeight:"bold"}}>
            Minha Playlist
          </Text>
        </View>
        <ScrollView style={{flex:1, backgroundColor:'red'}}>
          <View style={{flex: 1, alignSelf: 'center', backgroundColor:'black'}}>
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