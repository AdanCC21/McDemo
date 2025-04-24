import React, { useState } from 'react'
import { View, Text, Pressable, Dimensions, Image, FlatList, StyleSheet } from 'react-native'
import hambuger from '../../assets/images/hambuger.png'
import { router } from 'expo-router'

export default function Carrito() {
    const title = 'Hamburgesa grande'
    const price = 123
    const foods = [
        {
            title: "BigMack",
            price: 250,
            ingredients: [
                { name: 'Carne', amount: 1, priceBase: 10 },
                { name: 'Tomates', amount: 1, priceBase: 5 },
                { name: 'Aros de Cebolla', amount: 2, priceBase: 5 },
            ]
        },
        {
            title: "Hamburgesa Sencilla",
            price: 150,
            ingredients: [
                { name: 'Carne', amount: 1, priceBase: 10 },
                { name: 'Queso', amount: 2, priceBase: 15 },
            ]
        },
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
                        router.push({ pathname: 'gens/Ingredients', params: { title: item.title, price: item.price, ingredients: JSON.stringify(item.ingredients) }})
                }}>
            <View
                className='p-4 m-3 rounded-xl'
                style={styles.card}
            >
                <View>
                    <Text style={styles.cardTitle} >{item.title}</Text>
                    {item.ingredients.map((ing, index) => (
                        <Text style={styles.cardList} key={index}>{ing.name}</Text>
                    ))}
                </View>
                <Image source={hambuger} style={{ width: 50, height: 50 }} />
            </View>
        </Pressable>
    )
}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 6,
        backgroundColor: 'white'
    },
    cardTitle: {
        fontSize: 20,
    },
    cardList: {
        fontSize: 12,
        fontWeight: 400
    }
})