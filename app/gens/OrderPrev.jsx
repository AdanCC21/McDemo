import React from 'react'
import hambuger from '../../assets/images/hambuger.png'
import { Text, Image, FlatList, View, Dimensions, Pressable, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router';

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
    const { width, height } = Dimensions.get('window');
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
                data={foods}
                key={(item) => item.title}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => { router.push('gens/Ingredients'), {} }}>
                        <View className='justify-between p-4 m-3' style={styles.card}>
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
                    </Pressable>
                )}
            />
            {/* Botón fijo al fondo */}
            <Pressable
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
                onPress={() => {
                    router.push('/gens/Carrito');
                }}
            >
                <Text style={{ marginRight: 10 }}>Agregar Al Carrito</Text>
                <Feather name="shopping-cart" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 12,
        elevation: 6,
        backgroundColor: 'white'
    }
})
