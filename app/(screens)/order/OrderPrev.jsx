import React from 'react'
import hambuger from '../../../assets/images/hambuger.png'
import { Text, Image, FlatList, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';


const foodsE = [{
    id: 23,
    title: "hambuger",
    price: 231,
    ingredients: [{ name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }]
}, {
    id: 25,
    title: "McDesayuno",
    price: 231,
    ingredients: [{ name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }]
}]

export default function OrderPrev() {
    const { title = "", price = 0, foods = [] } = useLocalSearchParams();
    return (
        <View>
            {/* Combinacion de todo */}
            <View className='mx-auto'>
                <Text>{title}</Text>
                <Image source={hambuger} style={{ width: 200, height: 200 }} />
                <Text>{price}</Text>
            </View>

            {/* Lista de comidas */}
            <FlatList
                data={foodsE}
                key={(item) => item.title}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View className='justify-between p-4 bg-stone-400 m-3 rounded-xl' style={{ flexDirection: "row" }}>
                        <View>
                            <Text>{item.title}</Text>
                            <FlatList
                                data={item.ingredients}
                                renderItem={({ item, index }) => (
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                )}
                            />
                        </View>
                        <Image source={hambuger} style={{ width: 50, height: 50 }} />
                    </View>
                )}
            />
        </View>
    )
}
