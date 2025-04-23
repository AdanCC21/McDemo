import React, { useState } from 'react'
import { View, Text, Pressable, Dimensions, Image, FlatList } from 'react-native'
import hambuger from '../assets/images/hambuger.png'
import AmountBut from '../components/AmountBut'
import Feather from '@expo/vector-icons/Feather'

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

    const [amount, setAmount] = useState(0)
    const { width, height } = Dimensions.get('window')

    return (
        <View style={{ flex: 1 }}>
            {/* Encabezado fijo */}
            <View
                style={{
                    width: width * 0.8,
                    marginHorizontal: width * 0.1,
                    alignItems: 'center',
                    marginTop: 20,
                }}
            >
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
                <Image source={hambuger} style={{ width: 200, height: 200 }} />
                <AmountBut currentAmount={amount} setAmount={setAmount} />
                <Text style={{ color: '#838383', marginVertical: 8 }}>{price}$</Text>
            </View>

            {/* FlatList scrollable */}
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 100 }}
                data={foods}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item }) => (
                    <View
                        className='justify-between p-4 bg-stone-400 m-3 rounded-xl'
                        style={{ flexDirection: "row" }}
                    >
                        <View>
                            <Text>{item.title}</Text>
                            {item.ingredients.map((ing, index) => (
                                <Text key={index}>{ing.name}</Text>
                            ))}
                        </View>
                        <Image source={hambuger} style={{ width: 50, height: 50 }} />
                    </View>
                )}
            />

            {/* Botón fijo al fondo */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 20,
                    left: width * 0.2,
                    width: width * 0.6,
                    flexDirection: 'row',
                    backgroundColor: '#efFF00',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 12,
                }}
            >
                <Text style={{ marginRight: 10 }}>Agregar Al Carrito</Text>
                <Feather name="shopping-cart" size={24} color="black" />
            </View>
        </View>
    )
}
