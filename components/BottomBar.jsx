import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from 'expo-router'

export default function BottomBar() {
    const navigator = useNavigation();
    return (
        <View className=' justify-around py-2 bg-stone-500' style={{ flexDirection: 'row' }}>
            <Pressable onPress={() => { navigator.navigate('/') }}>
                <Text>Inicio</Text>
            </Pressable>
            <Pressable onPress={() => { navigator.navigate('Carrito',{}) }}>
                <Text>Carrito</Text>    
            </Pressable>
            <Pressable onPress={() => { navigator.navigate('/') }}>
                <Text>Maps</Text>
            </Pressable>
        </View>
    )
}
