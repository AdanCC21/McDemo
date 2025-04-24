import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function BottomBar() {
    return (
        <View className=' justify-around py-2 bg-[#FEFBE8]' style={{ flexDirection: 'row', borderTopLeftRadius: 12, borderTopEndRadius: 12 }}>
            <Pressable style={styles.container} onPress={() => { router.push('gens') }}>
                <FontAwesome name="home" size={24} color="black" />
                <Text style={styles.texto}>Inicio</Text>
            </Pressable>
            <Pressable style={styles.container} onPress={() => { router.push('gens/Carrito', {}) }}>
                <Feather name="shopping-cart" size={24} color="black" />
                <Text style={styles.texto}>Carrito</Text>
            </Pressable>
            <Pressable style={styles.container} onPress={() => { router.push('gens') }}>
                <FontAwesome name="map-marker" size={24} color="black" />
                <Text style={styles.texto}>Maps</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    texto: {
        fontSize: 10
    }
})