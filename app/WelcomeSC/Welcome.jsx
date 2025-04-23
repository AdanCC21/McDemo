import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react'
import { Dimensions, Text, View } from 'react-native'

export default function Welcome() {
    const { width, height } = Dimensions.get('window');
    const navigator = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigator.navigate('WelcomeSC/Discapacidades')
        }, 2200);
    }, [])
    return (
        <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }} className='bg-[#d62718]'>
            <Text style={{ fontSize: 20, color:'white' }} className='bold'>Bienvenido</Text>
            <Text style={{color:'white'}}>Vamos a personalizar tu experiencia</Text>
        </View>
    )
}

