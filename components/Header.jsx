import { View, TextInput, Image } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AntDesign from '@expo/vector-icons/AntDesign';
import accIcon from '../assets/images/icons/accessibility.png';

export default function Header() {
    const [search, setSearch] = useState("");
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View className="flex-row justify-between items-center pb-2 px-5 bg-[#FEFBE8]" style={{ height: 80, paddingTop: safeAreaInsets.top }}>
            <StatusBar />
            <Image source={accIcon} style={{ width: 20, height: 30 }} />
            <View className="flex-row justify-between items-center bg-white rounded-lg shadow p-2" style={{ height: 40, width: 300 }}>
                <TextInput
                    value={search}
                    onChange={setSearch}
                />
                <AntDesign name="search1" size={18} color="black" />
            </View>

            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" }} style={{ width: 30, height: 30, resizeMode: "cover", borderRadius: 50 }} />
        </View>
    )
}