import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function BottomBar() {
    return (
        <View className=' justify-around py-2 bg-stone-500' style={{ flexDirection: 'row' }}>
            <Pressable onPress={() => { router.push('gens') }}>
                <Text>Inicio</Text>
            </Pressable>
            <Pressable onPress={() => {router.push('gens/Carrito',{}) }}>
                <Text>Carrito</Text>    
            </Pressable>
            <Pressable onPress={() => { router.push('gens') }}>
                <Text>Maps</Text>
            </Pressable>
        </View>
    )
}
