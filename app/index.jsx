import React, { useEffect } from 'react'
import { Dimensions, Image, View } from 'react-native'
import Logo from '../assets/images/McDonald.png'
import { useNavigation } from 'expo-router'

export default function index() {
    const navigator = useNavigation();
    const { width, height } = Dimensions.get('window');
    useEffect(() => {
        setTimeout(() => {
            navigator.navigate('WelcomeSC/Welcome', {})
        }, 1000)
    }, [])
    return (
        <View style={{ width: width, height: height }}>
            <Image source={Logo} style={{ width: 200, height: 200, margin: 'auto', resizeMode:'contain' }} />
        </View>
    )
}
