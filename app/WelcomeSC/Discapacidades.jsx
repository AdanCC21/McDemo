import { useNavigation } from 'expo-router';
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Discapacidades() {
    const [disc, setDisc] = useState([false, false, false, false]);
    const navigator = useNavigation();
    const handlePress = (index) => {
        const temp = [...disc]; // Crea una copia del array para no mutar el estado directamente
        temp[index] = !temp[index];
        setDisc(temp);
    };

    return (
        <View>
            <View>
                <Text>Dificultades</Text>
                <Text>¿Cuentas con alguna de las siguientes dificultades?</Text>
            </View>
            <ScrollView>
                <View style={styles.discap}>
                    <Text>Sordera</Text>
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
                    <Text>Cegera</Text>
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
                    <Text>Motriz</Text>
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
                    <Text>Ninguna</Text>
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
                        navigator.navigate('gens');
                    }}>
                    <Text>Continuar</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    discap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
