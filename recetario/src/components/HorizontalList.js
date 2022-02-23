import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import recipes from '../utils/recipes';
import ListItem from './ListItem';
import colors from '../utils/colors';

const HorizontalList = () => {
  return (
    <View>
        <Text style={styles.title}>TRENDING</Text>
        <View >
          <FlatList
            horizontal
            data={recipes}
            renderItem={({item}) => <ListItem recipe={item} />}
            keyExtractor={recipe => recipe.id}
            style={styles.views}
          />
        </View>
    </View>
  )
}

export default HorizontalList

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10
  },
  views:{
      flexDirection: "row", 
 
  },
})