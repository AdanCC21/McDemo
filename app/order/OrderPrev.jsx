import React from 'react'
import hambuger from '../../assets/images/hambuger.png'
import { Text, Image, FlatList, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';


const foodsE = [{
    id: 23,
    title: "hambuger",
    price: 231,
    ingredients: [{ name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }, { name: "Meat", amount: 1, basePrice: 20 }]
}]

export default function OrderPrev() {
    const { title = "", price = 0, foods = [] } = useLocalSearchParams();
    return (
        <View>
            <View className='mx-auto'>
                <Text>{title}</Text>
                <Image source={hambuger} style={{ width: 200, height: 200 }} />
                <Text>{price}</Text>
            </View>
            
            <FlatList
                data={foodsE}
                key={(item) => item.title}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View >
                        <View>
                            <Text>{item.name}</Text>
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
