import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function Welcome() {
    const navigator = useNavigation();
    useEffect(()=>{
        setTimeout(() => {
             navigator.navigate('WelcomeSC/Discapacidades')
        }, 2200);
    },[])
    return (
        <View>
            <Text style={{ fontSize: 20 }} className='bold'>Bienvenido</Text>
            <Text>Vamos a personalizar tu experiencia</Text>
        </View>
    )
}

