import React from "react";
import { View, ViewSafeArea, TextInput, StyleSheet } from "react-native";
import colors from '../utils/colors.js';

const SearchBar = () => {
    return (
        <View style={styles.inputSearch}>
            <TextInput style={styles.textSearch} placeholder="What do you want to eat?" placeholderTextColor="#ffffff"/>
        </View> 
    )
}

const styles = StyleSheet.create({
    inputSearch: {
    
      height: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      //marginHorizontal: 40, 
      marginVertical: 30,
    }, 
    textSearch: {
        backgroundColor: colors.BG_SB,
        color: '#ffffff',
        width: '80%',
        paddingVertical: Platform.OS === 'ios' ? 15:8,
        borderRadius: 5,
    }
  })
export default SearchBar;