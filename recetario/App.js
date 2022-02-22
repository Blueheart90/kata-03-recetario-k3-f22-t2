/** 
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import SearchBar from './src/components/SearchBar';
import colors from './src/utils/colors';
import ListItem from './src/components/ListItem';


const App = () => {
  
  return (
      <SafeAreaView style={styles.container}>
        <SearchBar/>
        <ListItem/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG, 
    flex:1,
    // marginTop: Platform.OS === 'ios' ? 50:0,
    
  }
})
export default App;
