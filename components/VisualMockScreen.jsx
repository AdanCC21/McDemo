// Nombre de archivo sugerido: VisualMockScreen.jsx
import React from 'react';
import { View, Text, TextInput, Image, Pressable, StyleSheet, ScrollView, Dimensions } from 'react-native';

// --- Importa tus imágenes y iconos ---
// Necesitarás tener estas imágenes en tu proyecto
import hamburgerImage from '../../assets/images/hambuger.png'; // La que ya usas
import staticMapImage from '../../assets/images/map.png';
import userIconPlaceholder from '../../assets/images/icons/user_placeholder.png'; // <-- Icono placeholder para usuario
import searchIconPlaceholder from '../../assets/images/icons/search_placeholder.png'; // <-- Icono placeholder para búsqueda
import personIconPlaceholder from '../../assets/images/icons/person.png'; // <-- Icono placeholder para la esquina

// O usa iconos vectoriales si los prefieres
// import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function VisualMockScreen() {

    return (
        // Usamos ScrollView por si el contenido es más alto que la pantalla
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            {/* --- 1. Header Fijo --- */}
            <View style={styles.header}>
                <Pressable>
                    {/* <Ionicons name="person-outline" size={28} color="#333" /> */}
                    <Image source={personIconPlaceholder} style={styles.headerIcon} />
                </Pressable>
                <View style={styles.searchContainer}>
                    {/* <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} /> */}
                    <Image source={searchIconPlaceholder} style={[styles.headerIcon, styles.searchIcon]} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar"
                        placeholderTextColor="#666"
                    />
                </View>
                <Pressable>
                    {/* Usa una imagen de perfil o un icono */}
                    <Image source={userIconPlaceholder} style={styles.profileIcon} />
                </Pressable>
            </View>

            {/* --- 2. Promo Card Fija --- */}
            <View style={styles.promoCard}>
                <Image source={hamburgerImage} style={styles.promoImage} resizeMode="contain" />
                <View style={styles.promoTextContainer}>
                    <Text style={styles.promoText}>¿Vamos por tu BigMc?</Text>
                </View>
                {/* Círculo amarillo decorativo */}
                <View style={styles.yellowCircle}></View>
            </View>

            {/* --- 3. Imagen de Mapa Estática --- */}
            <View style={styles.mapContainer}>
                <Image
                    source={staticMapImage} // Usa la imagen estática del mapa aquí
                    style={styles.mapImage}
                    resizeMode="cover" // 'cover' o 'stretch' dependiendo de tu imagen
                />
            </View>

            {/* --- 4. Botón Fijo "Ir" --- */}
            <Pressable style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Ir</Text>
                {/* Icono flecha (puedes usar una imagen o un icono vectorial) */}
                <Text style={styles.actionButtonArrow}>→</Text>
                {/* <Ionicons name="arrow-forward-outline" size={20} color="black" /> */}
            </Pressable>

            {}

        </ScrollView>
    );
}

// --- Estilos para parecerse a la imagen ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Un gris muy claro de fondo
    },
    contentContainer: {
        paddingBottom: 90, // Espacio para que el botón no quede pegado a la TabBar
    },
    // --- Header Styles ---
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 50, // Ajusta para SafeArea/StatusBar
        paddingBottom: 10,
        backgroundColor: '#f0f0f0', // Mismo fondo que el container
    },
    headerIcon: {
        width: 28,
        height: 28,
        tintColor: '#333', // Color para los iconos si son blancos/transparentes
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white', // Fondo blanco para la barra
        borderRadius: 8, // Bordes redondeados
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
        borderRadius: 18, // Hacerlo circular
    },
    // --- Promo Card Styles ---
    promoCard: {
        backgroundColor: '#d91a2a', // Rojo similar al de la imagen
        borderRadius: 12,
        marginHorizontal: 15,
        marginTop: 15,
        padding: 10, // Menos padding que antes
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 130, // Un poco más alta
    },
    promoImage: {
        width: 120, // Más grande
        height: 90, // Más grande
        marginLeft: -5, // Ligeramente a la izquierda
        marginRight: 5,
    },
    promoTextContainer: {
        flex: 1,
        paddingLeft: 5,
        zIndex: 1, // Asegura que el texto esté sobre el círculo
    },
    promoText: {
        color: 'white',
        fontSize: 26, // Más grande
        fontWeight: 'bold',
        lineHeight: 30, // Ajusta interlineado
    },
    yellowCircle: {
        width: 100, // Más grande
        height: 100, // Más grande
        borderRadius: 50,
        backgroundColor: '#fcd34d', // Amarillo
        position: 'absolute',
        right: 20,
        top: 15,
        zIndex: 0, // Detrás del texto/imagen si es necesario (ajustar zIndex en promoTextContainer)
    },
    // --- Map Styles ---
    mapContainer: {
        height: 350, // Altura deseada para la imagen del mapa
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden', // Importante para que la imagen respete el borde redondeado
        backgroundColor: '#e0e0e0', // Color de fondo mientras carga la imagen
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    // --- Button Styles ---
    actionButton: {
        backgroundColor: '#fcd34d', // Amarillo
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14, // Más alto
        paddingHorizontal: 30,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: -25, // <<--- Solapa ligeramente sobre el mapa
        zIndex: 10, // Asegura que esté sobre el mapa
        minWidth: 120, // Ancho mínimo
        // Sombra
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
    },
    actionButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Texto más oscuro para contraste
        marginRight: 10,
    },
    actionButtonArrow: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});