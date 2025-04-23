import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Inicio', // O el título que desees para esta pestaña
                }}
            />
            {/* Puedes agregar más Tabs.Screen aquí */}
        </Tabs>
    )
}
