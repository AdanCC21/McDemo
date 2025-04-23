import React, { useRef } from 'react'
import { FlatList, View, Dimensions, Text, Image, Pressable } from 'react-native'
import hambuger from '../../assets/images/hambuger.png'
import cupon from '../../assets/images/icons/cupon.png'
import { useNavigation } from 'expo-router'

export default function index({ }) {
    const { width, height } = Dimensions.get('window');
    const carruRef = useRef(null);
    const navigation = useNavigation();

    const listOfItems = [{
        title: "texto 1"
    }, {
        title: "texto 2"
    }, {
        title: "texto 3"
    },]

    const fyp = [{
        title: "comida 1",
        price: 350
    }, {
        title: "comida 2",
        price: 100
    }, {
        title: "comida 13",
        price: 200
    },]

    return (
        <View className='px-3'>
            <View>
                <FlatList
                    data={listOfItems}
                    keyExtractor={(_, index) => index.toString()}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View key={index} style={{ width: width * 0.8, height: height * 0.3, marginHorizontal: width * 0.1 }} className="bg-red-500">
                            <Text>Hi, this is the item number {index}</Text>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            </View>

            <View>
                <Text>Para ti</Text>
                <FlatList
                    data={fyp}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.title}
                    renderItem={({ item, index }) => (
                        <Pressable className='mx-3'
                            onPress={() => {
                                navigation.navigate('OrderPrev', {
                                    title: item.title,
                                    price: item.price,
                                    foods: [{
                                        id: 1,
                                        title: item.title,
                                        price: item.price,
                                        ingredients: [
                                            { name: 'Pan', amount: 1, basePrice: 5 },
                                            { name: 'Carne', amount: 1, basePrice: 20 },
                                            { name: 'Queso', amount: 1, basePrice: 10 },
                                        ]
                                    }]
                                })
                            }}>
                            <View key={index} className='bg-[#e1e1e1] rounded-lg' style={{ width: 120 }}>
                                <Image source={hambuger} className='m-auto' style={{ width: 100, height: 100 }} />
                            </View>
                            <Text className='font-bold' style={{ fontSize: 18 }}>{item.title}</Text>
                            <Text className='text-[#838383]' style={{ fontSize: 12 }}>{item.price}$</Text>
                        </Pressable>
                    )}
                >
                </FlatList>
            </View>
            <View className='bg-[#E0E0E0] my-2 py-3'>
                <View className='flex-row'>
                    <Image className='ml-3' style={{ width: 40, height: 40 }} source={cupon} />
                    <Text className='font-bold mx-2 my-auto' style={{ fontSize: 20 }}>Cupones</Text>
                </View>
                <Text className='mx-2'>
                    Presiona aqui para ver tus cupones
                </Text>
            </View>
        </View>
    )
}
