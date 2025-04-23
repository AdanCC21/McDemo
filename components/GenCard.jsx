import React from 'react'

export default function GenCard({ children, id }) {
    return (
        <View key={id} className="bg-orange-700 rounded-lg p-5">
            {children}
        </View>
    )
}
