import { router } from 'expo-router';
import React, { useState } from 'react'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Discapacidades() {
    const { width, height } = Dimensions.get('window')
    const [disc, setDisc] = useState([false, false, false, false]);
    const handlePress = (index) => {
        const temp = [...disc];
        temp[index] = !temp[index];
        setDisc(temp);
    };

    return (
        <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }} className='bg-[#d62718]'>
            <View>
                <Text style={{ color: 'white', fontSize: 32 }} className='font-bold'>Dificultades</Text>

                <Text style={{ color: 'white', fontSize: 18 }}>¿Cuentas con alguna de las siguientes dificultades?</Text>
            </View>

            <View style={{ width: width * 0.8, marginHorizontal: width * 0.1 }}>
                <View style={styles.discap}>
                    <Text style={{ color: 'white' }}>Sordera</Text>
                    <Pressable
                        onPress={() => {
                            handlePress(0);
                        }}
                    >
                        {disc[0] ? (
                            <View style={{ width: 10, height: 10 }} className='bg-[#eeFF00]'></View>) : (
                            <View style={{ width: 10, height: 10 }} className='bg-[#0000ff]'></View>
                        )}
                    </Pressable>
                </View>
                <View style={styles.discap}>
                    <Text style={{ color: 'white' }}>Cegera</Text>
                    <Pressable
                        onPress={() => {
                            handlePress(1);
                        }}
                    >
                        {disc[1] ? (
                            <View style={{ width: 10, height: 10 }} className='bg-[#eeFF00]'></View>) : (
                            <View style={{ width: 10, height: 10 }} className='bg-[#0000ff]'></View>
                        )}
                    </Pressable>
                </View>
                <View style={styles.discap}>
                    <Text style={{ color: 'white' }}>Motriz</Text>
                    <Pressable
                        onPress={() => {
                            handlePress(2);
                        }}
                    >
                        {disc[2] ? (
                            <View style={{ width: 10, height: 10 }} className='bg-[#eeFF00]'></View>) : (
                            <View style={{ width: 10, height: 10 }} className='bg-[#0000ff]'></View>
                        )}
                    </Pressable>
                </View>
                <View style={styles.discap}>
                    <Text style={{ color: 'white' }}>Ninguna</Text>
                    <Pressable
                        onPress={() => {
                            handlePress(3);
                        }}
                    >
                        {disc[3] ? (
                            <View style={{ width: 10, height: 10 }} className='bg-[#eeFF00]'></View>) : (
                            <View style={{ width: 10, height: 10 }} className='bg-[#0000ff]'></View>
                        )}
                    </Pressable>
                </View>
                <Pressable
                    onPress={() => {
                        router.push('gens');
                    }}>
                    <Text className='font-bold' style={{ color: 'white', marginVertical: 5, marginHorizontal: 'auto' }}>Continuar</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    discap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    }
})
