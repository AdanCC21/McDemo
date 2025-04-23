import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header';
import "../global.css"
import { StatusBar } from 'expo-status-bar';

export default function _layout() {
    return (
        <SafeAreaProvider>
            <Stack screenOptions={{
                header: () => (<Header />)
            }}>
            </Stack>
        </SafeAreaProvider>
    )
}
