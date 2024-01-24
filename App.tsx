import React from "react";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

function App(){
  return(
    <SafeAreaView>
    <View>
      <Text>
        Hello world !!
      </Text>
    </View>
  </SafeAreaView>
  )
}


export default App;


//SafeAreaView is used to avoid conflict with mobile notches. it wraps everything inside it.
//styling is from top to bottom
//View acts like div from web


// to use another file-
// create another file eg- AppPro.tsx in root
// in index.js change import of App to AppPro and also change AppRegistry to AppPro