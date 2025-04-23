import React from 'react'
import { Pressable, View, Text } from 'react-native'

export default function AmountBut({ currentAmount = 0, setAmount }) {
    return (
        <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between' }} className='p-2 rounded-lg border border-[#eeff00]'>
            <Pressable onPress={() => { setAmount(prev => prev + 1) }}>
                <Text>+</Text>
            </Pressable>
            <Text>{currentAmount}</Text>
            <Pressable onPress={() => { setAmount(prev => prev - 1) }}>
                <Text>-</Text>
            </Pressable>
        </View>
    )
}
