import React from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';

import { useAccessibility } from '../AccessibilityContext';
import * as IntentLauncher from 'expo-intent-launcher';

const openAccessibilitySettings = () => {
  if (Platform.OS === 'android') {
    IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS)
      .catch(err => console.error('Error al abrir ajustes de accesibilidad:', err));
  } else {
    console.log('Solo se soporta Android en este caso.');
  }
};

const AccessibilityOfferModal = () => {
  const {
    isLoading,
    isNativeScreenReaderEnabled,
    hasSeenAccessibilityOffer,
    shouldShowAccessibilityOfferManually,
    markOfferAsSeen,
  } = useAccessibility();

  const modalVisible =
    shouldShowAccessibilityOfferManually &&
    !isLoading &&
    !isNativeScreenReaderEnabled &&
    !hasSeenAccessibilityOffer;

  if (!modalVisible) {
    return null;
  }

  const handleAccept = () => {
    markOfferAsSeen();
    openAccessibilitySettings(); // <-- Redirige a ajustes
  };

  const handleDecline = () => {
    markOfferAsSeen();
  };

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={handleDecline}
    >
      <Pressable style={styles.centeredView} onPress={handleDecline}>
        <Pressable onPress={() => {}}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Modo Accesible Opcional</Text>
            <Text style={styles.modalText}>
              Hemos detectado que no tienes un servicio de accesibilidad nativo activo.
              ¿Te gustaría activar el Modo Accesible o ver las opciones de accesibilidad en tu dispositivo?
              Puedes cambiar esto más tarde en configuración.
            </Text>
            <View style={styles.buttonContainer}>
              <Button title="Sí, abrir ajustes" onPress={handleAccept} />
              <View style={{ width: 15 }} />
              <Button title="No, gracias" onPress={handleDecline} color="#666" />
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AccessibilityOfferModal;

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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0px 2px 2.62px rgba(0, 0, 0, 0.23)',
      },
    }),
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
    justifyContent: 'space-around',
    width: '100%',
  },
});
