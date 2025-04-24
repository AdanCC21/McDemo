// McDemo/components/AccessibilityOfferModal.js
import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Pressable, Platform } from 'react-native';
import { useAccessibility } from '../AccessibilityContext';

const AccessibilityOfferModal = () => {
    const {
        isLoading, isNativeScreenReaderEnabled, hasSeenAccessibilityOffer,
        shouldShowAccessibilityOfferManually, // El estado clave
        toggleAppAccessibleMode, markOfferAsSeen,
    } = useAccessibility();

  const modalVisible =
    shouldShowAccessibilityOfferManually && // <-- ¡Debe ser activado manualmente!
    !isLoading &&
    !isNativeScreenReaderEnabled &&
    !hasSeenAccessibilityOffer;
  
    console.log(`>>> (Modal) Renderizando. manualTrigger=<span class="math-inline">\{shouldShowAccessibilityOfferManually\}, isLoading\=</span>{isLoading}, nativeSR=<span class="math-inline">\{isNativeScreenReaderEnabled\}, seenOffer\=</span>{hasSeenAccessibilityOffer}. Visible=${modalVisible}`);
  if (!modalVisible) {
      return null;
  }
  const handleEnableMode = () => {
    if (!isAppAccessibleModeEnabled) {
        toggleAppAccessibleMode();
    } else {
        markOfferAsSeen(); // Llama a markOfferAsSeen que ahora resetea el trigger manual
    }
  };

  const handleDismiss = () => {
    markOfferAsSeen(); // Llama a markOfferAsSeen que ahora resetea el trigger manual
  };

  if (!modalVisible) {
    return null;
  }

  // El JSX del Modal (Text, Button, View...) sigue igual que antes
  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={handleDismiss}
    >
      <Pressable style={styles.centeredView} onPress={handleDismiss}>
        <Pressable onPress={() => {}}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Modo Accesible Opcional</Text>
                <Text style={styles.modalText}>
                    Hemos detectado que no tienes un servicio de accesibilidad nativo activo.
                    ¿Te gustaría activar nuestro Modo Accesible para facilitar la navegación (p.ej. botones más grandes)?
                    Puedes cambiar esto después en la configuración.
                </Text>
                <View style={styles.buttonContainer}>
                    <Button title="Activar Ahora" onPress={handleEnableMode} />
                    <View style={{ width: 15 }} />
                    <Button title="No, gracias" onPress={handleDismiss} color="#666" />
                </View>
            </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    // --- Inicio de la Corrección de Sombra ---
    ...Platform.select({
      ios: { // Mantener estilos iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23, // Usar número directamente
        shadowRadius: 2.62,
      },
      android: { // Mantener estilo Android
        elevation: 5,
      },
      web: { // Usar boxShadow para Web
        boxShadow: '0px 2px 2.62px rgba(0, 0, 0, 0.23)' // offsetX offsetY blurRadius color
      }
    })
    // --- Fin de la Corrección de Sombra ---
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // 'space-evenly' podría dar mejor espacio
     width: '100%',
  },
});

export default AccessibilityOfferModal;