import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

declare const global: {HermesInternal: null | {}}

const App = () => {
  return (
    <>
      <StatusBar barStyle='default'/>
      <View style={{flex:1}}>
        <View>
          <Text>
            Oi
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