import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <SafeAreaView>
        <StatusBar backgroundColor="black"></StatusBar>
        <ScrollView style={{backgroundColor:'black'}}>
          <View style={{flex: 0, alignSelf: 'center', backgroundColor:'black'}}>
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