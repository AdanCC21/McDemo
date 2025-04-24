import React, { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AmountBut from '../../components/AmountBut';
import hambuger from '../../assets/images/hambuger.png';

export default function Ingredients() {
    const {
        title = "hambuger",
        price = 231,
        image,
        ingredients = Array(8).fill({ name: 'meat', priceBase: 10, amount: 10 })
    } = useLocalSearchParams();

    const [amount, setAmount] = useState();

    return (
        <View style={styles.container}>
            <View className='bg-[#FEFBE8] flex-row' style={styles.header}>
                <View style={styles.imageSection}>
                    <Image source={hambuger} style={styles.image} alt='imagen de pedido' />
                    <Text className='color-[#838383]'>{price}$</Text>
                </View>
                <View style={styles.titleSection}>
                    <Text style={styles.title} className='font-bold'>{title}</Text>
                    <View style={styles.actions}>
                        <Text>Descartar</Text>
                        <Text>Continuar</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.ingredientHeader} className='font-bold'>Ingredientes</Text>

            <FlatList
                data={ingredients}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View className='border border-[#838383] rounded-xl items-center justify-between px-3 py-2 my-3' style={styles.ingredientItem}>
                        <View style={styles.ingredientInfo}>
                            <Image source={hambuger} style={{ width: 30, height: 30 }} />
                            <Text className='mx-3'>{item.name}</Text>
                        </View>
                        <AmountBut amount={amount} setAmount={setAmount} />
                    </View>
                )}
            />

            <Text style={styles.ingredientHeader} className='font-bold'>Agregar</Text>
            <FlatList
                data={ingredients}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View className='border border-[#838383] rounded-xl items-center justify-between px-3 py-2 my-3' style={styles.ingredientItem}>
                        <View style={styles.ingredientInfo}>
                            <Image source={hambuger} style={{ width: 30, height: 30 }} />
                            <Text className='mx-3'>{item.name}</Text>
                        </View>
                        <AmountBut amount={amount} setAmount={setAmount} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#FEFBE8',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    imageSection: {
        flex: 1,
        alignItems: 'center',
    },
    titleSection: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 32,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    ingredientHeader: {
        fontSize: 28,
        marginBottom: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    ingredientItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ingredientInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
