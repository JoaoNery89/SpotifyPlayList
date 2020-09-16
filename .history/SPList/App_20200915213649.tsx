import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <SafeAreaView style={{flex:1}}>
        <ScrollView>
          <View>
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