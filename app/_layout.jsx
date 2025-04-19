import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header';
import "../global.css"

export default function _layout() {
    return (
        <SafeAreaProvider>
            <Text className="text-red-500">HOLAAAAAAAAa</Text>
            {/* <Stack screenOptions={{
                header: () => (<Header />)
            }}>
            </Stack> */}
        </SafeAreaProvider>
    )
}
