import { Stack, Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header';
import "../global.css"
import { StatusBar } from 'expo-status-bar';
import BottomBar from '../components/BottomBar';

export default function _layout() {
    return (
        <SafeAreaProvider>
            <Stack screenOptions={{
                header: () => (<Header />)
            }}>

            </Stack>
            <BottomBar />
            <StatusBar style='auto' />
        </SafeAreaProvider>
    )
}
