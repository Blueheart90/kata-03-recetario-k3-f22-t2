import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const ListItem = ({recipe}) => {
    return (
        <View>
            <Image style={styles.img} source={{ uri: recipe.image}}/>
            <Text style={styles.title}>{recipe.name}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    title: {
        color: 'white'
    },
    img:{
        width: 100, 
        height: 100
    }
});