import React, { useState } from 'react'
import { View, Text, Pressable, Dimensions, Image, FlatList, StyleSheet } from 'react-native'
import hambuger from '../../assets/images/hambuger.png'
import { router } from 'expo-router'

export default function Carrito() {
    const title = 'Hamburgesa grande'
    const price = 123
    const foods = [
        {
            title: "Simon",
            price: 150,
            ingredients: [
                { name: 'cebolla', amount: 2, priceBase: 10 },
                { name: 'lechuga', amount: 1, priceBase: 5 },
            ]
        },
        {
            title: "SimonLimon",
            price: 350,
            ingredients: [
                { name: 'Carne', amount: 1, priceBase: 10 },
                { name: 'queso', amount: 1, priceBase: 15 },
            ]
        },
        // Agrega más si quieres
    ]

    const { width, height } = Dimensions.get('window')

    return (
        <View style={{ flex: 1 }}>
            {/* Encabezado fijo */}
            <Text style={{ fontSize: 32 }} className='font-bold'>Pedido actual</Text>

            {/* FlatList scrollable */}
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 100 }}
                data={foods}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {
                        router.push('gens/Ingredients')
                    }}>
                        <View
                            className='p-4 m-3 rounded-xl bg-[#AA0000]'
                            style={styles.card}
                        >
                            <View>
                                <Text>{item.title}</Text>
                                {item.ingredients.map((ing, index) => (
                                    <Text key={index}>{ing.name}</Text>
                                ))}
                            </View>
                            <Image source={hambuger} style={{ width: 50, height: 50 }} />
                        </View>
                    </Pressable>
                )}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})