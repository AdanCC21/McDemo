import React, { useEffect } from 'react';
import { Dimensions, Image, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '../assets/images/McDonald.png'; 
import { useAccessibility } from '../AccessibilityContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function IndexScreen() {
    const router = useRouter();
    const { isLoading: isAccessibilityLoading } = useAccessibility();

    useEffect(() => {
        if (!isAccessibilityLoading) {
            const timer = setTimeout(() => {
                console.log("(IndexScreen) Context loaded, navigating to WelcomeSC/Welcome");
                router.replace('WelcomeSC/Welcome');
            }, 1000);
            return () => clearTimeout(timer);
        }
        // !!!!! IMPORTANTE: BORRA O COMENTA TODO ESTE useEffect DESPUÉS !!!!!
        // !!!!! SOLO ES PARA REINICIAR LA OPCIÓN DE SWITCH ACCESS !!!!

    }, [isAccessibilityLoading, router]);

    return (
        <View style={styles.container}>
            {isAccessibilityLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Image
                    source={Logo}
                    style={styles.logo}
                    resizeMode='contain'
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 200,
        height: 200,
    }
});