import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import recipes from '../utils/recipes';
import ListItem from './ListItem';
import colors from '../utils/colors';

const HorizontalList = () => {
  const Trending = recipes.filter(recipe => recipe.category == 'Trending');
  const Recent = recipes.filter(recipe => recipe.category == 'Recent');
  return (
    <View>
      <View>
        <Text style={styles.title}>TRENDING</Text>
        <FlatList
          horizontal
          data={Trending}
          renderItem={({item}) => <ListItem  recipe={item} />}
          keyExtractor={recipe => recipe.id}
          showsHorizontalScrollIndicator={true}
        />
      </View>
      <View>
        <Text style={styles.title}>RECENT</Text>
        <FlatList
          horizontal
          data={Recent}
          renderItem={({item}) => <ListItem  recipe={item} />}
          keyExtractor={recipe => recipe.id}
          showsHorizontalScrollIndicator={true}
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
  }
})