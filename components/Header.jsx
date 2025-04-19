import { StyleSheet, View, Text, TextInput, Image } from 'react-native'
import Acc from './Acc'
import { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {
    const [search, setSearch] = useState("");

    return (
        <View style={headerStyles.header}>
            <Acc></Acc>
            <View style={headerStyles.input}>
                <TextInput
                    value={search}
                    onChange={setSearch}
                />
                <AntDesign name="search1" size={24} color="black" />
            </View>
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" }} style={{ width: 50, height: 50, resizeMode: "cover", borderRadius: 50 }} />
        </View>
    )
}

const headerStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#FEFBE8",
        justifyContent: "space-between"
    },
    input: {
        backgroundColor:"#FFF",
        margin:10,
        backfaceVisibility: "#FFF",
        borderRadius: 12,
        boxShadow:"solid 0 4 4 #000",
        width:'50%'
    }
})