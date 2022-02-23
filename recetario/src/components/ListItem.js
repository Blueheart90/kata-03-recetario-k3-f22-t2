import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const ListItem = ({recipe}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: recipe.image}}/>
            <Text style={styles.title}>{recipe.name}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    title: {
        color: 'white',
        marginTop: 5,
        fontSize: 15
    },
    img:{
        width: 115, 
        height: 115,
        borderRadius: 10,
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 15
        
    }
});