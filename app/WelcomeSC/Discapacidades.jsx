import { router } from 'expo-router';
import React, { useState } from 'react'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Discapacidades() {
    const { width, height } = Dimensions.get('window')
    const [disc, setDisc] = useState([false, false, false, false]);
    const handlePress = (index) => {
        const temp = [...disc]; // Crea una copia del array para no mutar el estado directamente
        temp[index] = !temp[index];
        setDisc(temp);
    };

    return (
        <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }} className='bg-[#d62718]'>
            <View>
                <Text style={{ color: 'white' }}>Dificultades</Text>
                <Text style={{ color: 'white' }}>¿Cuentas con alguna de las siguientes dificultades?</Text>
            </View>
            <ScrollView>
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
                        navigator.navigate('gens');
                    }}>
                    <Text style={{color:'white'}}>Continuar</Text>
                </Pressable>
            </ScrollView>
            <Pressable onPress={()=>{
                router.push('/screens/Home');
            }}>
                <Text>Continuar</Text>
            </Pressable>
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
