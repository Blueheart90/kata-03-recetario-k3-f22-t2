import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ListItem = () => {
    return (
        <View>
            <Image source={require('../img/pizza.png')}/>
            <Text>ListItem</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})