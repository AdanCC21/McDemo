// McDemo/app/_layout.jsx (Confirmado como Correcto)

import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header'; // Verifica ruta
import "../global.css";             // Verifica ruta
import { StatusBar } from 'expo-status-bar';
import BottomBar from '../components/BottomBar'; // Verifica ruta

// Verifica estas rutas
import { AccessibilityProvider } from '../AccessibilityContext';
import AccessibilityOfferModal from '../components/AccessibilityOfferModal';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <AccessibilityProvider>
                <AccessibilityOfferModal />
                <Stack>
                    {/* Pantallas principales */}
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="WelcomeSC/Welcome" options={{ headerShown: false, header: () => (<Header/>), title: 'Bienvenido' }}/>
                    <Stack.Screen name="WelcomeSC/Discapacidades" options={{ headerShown: false, header: () => (<Header/>), title: 'Dificultades' }}/>

                    {/* Grupo de pantallas 'screens'. headerShown: false aquí es correcto */}
                    <Stack.Screen name="gens" options={{ headerShown: false }} />

                    {/* Otras pantallas principales */}
                </Stack>
                {/* <BottomBar /> Si es global, puede ir aquí dentro de Provider */}
            </AccessibilityProvider>
            <StatusBar style='auto' />
        </SafeAreaProvider>
    )
}