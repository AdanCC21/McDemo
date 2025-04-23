import React from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import hambuger from '../assets/images/hambuger.png'
export default function FoodCard({ title, ingredients }) {
    return (
        <View className='justify-between p-4 bg-stone-400 m-3 rounded-xl' style={{ flexDirection: "row" }}>
            <View>
                <Text>{title}</Text>
                <FlatList
                    data={ingredients}
                    renderItem={({ item, index }) => (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
            <Image source={hambuger} style={{ width: 50, height: 50 }} />
        </View>
    )
}
