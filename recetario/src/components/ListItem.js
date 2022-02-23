import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const ListItem = ( {recipe}) => {
    return (
        <View style={styles.container}>
            <Image style={[recipe.category == 'Trending' ? styles.imgTreding : styles.imgRecent, {borderRadius: 10}]}  source={{ uri: recipe.image}}/>
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
    imgTreding:{
        width:   115 , 
        height:  115 ,
    },
    imgRecent: {
        width: 150,
        height: 150,
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 15
        
    }
});