import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <SafeAreaView>
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