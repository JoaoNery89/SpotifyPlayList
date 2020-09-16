import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <SafeAreaView>
        <StatusBar backgroundColor="black"></StatusBar>
        <View style={{flex:1, backgroundColor:'black'}}>
          <Text>Minha Lista</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text>
              Lista
            </Text>
          </View>          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App