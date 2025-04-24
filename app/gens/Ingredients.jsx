import React, { useState } from 'react'
import { FlatList, View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AmountBut from '../../components/AmountBut'
import hambuger from '../../assets/images/hambuger.png'

export default function Ingredients() {
    const { title = "hambuger", price = 231, image, ingredients = [{ name: 'meat', priceBase: 10, amount: 10 }, { name: 'meat', priceBase: 10, amount: 10 }] } = useLocalSearchParams();
    const [amount, setAmount] = useState();
    return (
        <View>
            <View className='bg-[#FEFBE8] flex-row'>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={hambuger} style={{ width: 80, height: 80, margin: 'auto' }} alt='imagen de pedido' />
                    <Text className='color-[#838383]'>{price}$</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 32 }} className='font-bold'>{title}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 'auto', justifyContent: 'space-around', marginBottom: 5 }}>
                        <Text>Descartar</Text>
                        <Text>Continuar</Text>
                    </View>
                </View>
            </View>

            <Text style={{ fontSize: 28, margin: 10 }} className='font-bold'>Ingredientes</Text>

            <FlatList
                data={ingredients}
                keyExtractor={(_, index) => index}
                renderItem={({ item, index }) => (
                    <View className='border border-[#838383] rounded-xl items-center justify-between px-3 py-2 my-3' style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems:'center' }}>
                            <Image source={hambuger} style={{ width: 30, height: 30 }} />
                            <Text className='mx-3'>{item.name}</Text>
                        </View>
                        <AmountBut amount={amount} setAmount={setAmount} />
                    </View>
                )}
            >

            </FlatList>
        </View>
    )
}
