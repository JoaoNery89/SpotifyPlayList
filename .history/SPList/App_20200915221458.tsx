import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <View style={{flex:1}}>
        <StatusBar backgroundColor="black"></StatusBar>
        <ScrollView style={{backgroundColor:'red'}}>
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