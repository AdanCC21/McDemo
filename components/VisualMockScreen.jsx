import React from 'react';
import { View, Text, TextInput, Image, Pressable, StyleSheet, ScrollView, Dimensions } from 'react-native';
import hamburgerImage from '../assets/images/hambuger.png'; // La que ya usas
import staticMapImage from '../assets/images/map.png';
import userIconPlaceholder from '../assets/images/icons/profile_placeholder.png'; // <-- Icono placeholder para usuario
import searchIconPlaceholder from '../assets/images/icons/search_placeholder.png'; // <-- Icono placeholder para búsqueda
import personIconPlaceholder from '../assets/images/icons/person.png'; // <-- Icono placeholder para la esquina
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function VisualMockScreen() {

    return (
        // Usamos ScrollView por si el contenido es más alto que la pantalla
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={styles.header}>
                <Pressable>
                </Pressable>
            </View>

            <View style={styles.promoCard}>
                <Image source={hamburgerImage} style={styles.promoImage} resizeMode="contain" />
                <View style={styles.promoTextContainer}>
                    <Text style={styles.promoText}>¿Vamos por tu BigMc?</Text>
                </View>
                <View style={styles.yellowCircle}></View>
            </View>


            <View style={styles.mapContainer}>
                <Image
                    source={staticMapImage} // Usa la imagen estática del mapa aquí
                    style={styles.mapImage}
                    resizeMode="cover" // 'cover' o 'stretch' dependiendo de la imagen
                />
            </View>

            <Pressable style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Ir</Text>
                <Text style={styles.actionButtonArrow}>→</Text>
            </Pressable>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    contentContainer: {
        paddingBottom: 90,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 50, 
        paddingBottom: 10,
        backgroundColor: '#f0f0f0', 
    },
    headerIcon: {
        width: 28,
        height: 28,
        tintColor: '#333', 
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        height: 40,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: '#666',
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#333',
    },
    profileIcon: {
        width: 36,
        height: 36,
        borderRadius: 18, 
    },
    promoCard: {
        backgroundColor: '#d91a2a',
        borderRadius: 12,
        marginHorizontal: 15,
        marginTop: 15,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 130,
    },
    promoImage: {
        width: 120, 
        height: 90,
        marginLeft: -5,
        marginRight: 5,
    },
    promoTextContainer: {
        flex: 1,
        paddingLeft: 5,
        zIndex: 1,
    },
    promoText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 30,
    },
    yellowCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fcd34d',
        position: 'absolute',
        right: 20,
        top: 15,
        zIndex: 0,
    },
    mapContainer: {
        height: 350,
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0',
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    actionButton: {
        backgroundColor: '#fcd34d',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: -25, 
        zIndex: 10, 
        minWidth: 120, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
    },
    actionButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 10,
    },
    actionButtonArrow: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});