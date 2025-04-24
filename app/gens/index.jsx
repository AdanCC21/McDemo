import React, { useRef } from 'react'
import { FlatList, View, Dimensions, Text, Image, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import PromoCarousel from '../../components/PromoCarousel';

import hambuger from '../../assets/images/hambuger.png'
import location from '../../assets/images/location.png'
import cupon from '../../assets/images/icons/cupon.png'

export default function index({ }) {
    const { width, height } = Dimensions.get('window');
    const carruRef = useRef(null);

    const listOfItems = [{
        title: "¿Vamos por tu BigMc?",
        image: hambuger
    }, {
        title: "Gracias por visitarnos!",
        description: "Disfruta de beneficios exclusivos por estar dentro de la tienda",
        image: location,
        url: '/gens/Game'
    },]

    const fyp = [{
        title: "BigMc",
        price: 350
    }, {
        title: "McNífica",
        price: 100
    }, {
        title: "McTocino",
        price: 200
    },]

    return (
        <View className='px-3'>
            <View>
                <PromoCarousel listOfItems={listOfItems} />
            </View>

            <View>
                <Text className="font-bold text-2xl my-2 " >Para ti</Text>
                <FlatList
                    data={fyp}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.title}
                    renderItem={({ item, index }) => (
                        <Pressable className='mx-3 '
                            onPress={() => {
                                router.push('/gens/OrderPrev', {
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
                            <View key={index} style={[styles.card, { width: 120 }]}>
                                <Image source={hambuger} className='m-auto' style={{ width: 100, height: 100 }} />
                            </View>
                            <Text className='font-bold' style={{ fontSize: 18 }}>{item.title}</Text>
                            <Text className='text-[#838383]' style={{ fontSize: 12 }}>{item.price}$</Text>
                        </Pressable>
                    )}
                >
                </FlatList>
            </View>
            <View style={styles.card} className='my-2 py-3'>
                <View className='flex flex-row'>
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

const styles = StyleSheet.create({
    card: {
        borderRadius:12,
        elevation: 6,
        backgroundColor: 'white'
    }
})
