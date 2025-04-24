// screens/SettingsScreen.js
import React from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';
// Correct path:
import { useAccessibility } from '../../AccessibilityContext';

const SettingsScreen = () => {
  const {
    isNativeScreenReaderEnabled,
    isAppAccessibleModeEnabled,
    toggleAppAccessibleMode,
    isLoading,
  } = useAccessibility();

  const handleToggle = () => {
    if (isNativeScreenReaderEnabled) {
      Alert.alert(
        "Modo Nativo Activo",
        "El modo accesible de la app no se puede activar manualmente mientras un servicio de accesibilidad nativo (como TalkBack/VoiceOver) está en uso."
      );
      return;
    }
    toggleAppAccessibleMode();
  };

  // You might want a loading indicator while isLoading is true
  if (isLoading) {
      return <View><Text>Cargando configuración...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración de Accesibilidad</Text>
      <View style={styles.settingRow}>
        <Text style={styles.label}>
          Activar Modo Accesible (Botones Grandes / Gestos)
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isAppAccessibleModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggle}
          value={isAppAccessibleModeEnabled}
          disabled={isNativeScreenReaderEnabled || isLoading} // Disable if native SR is on or loading
        />
      </View>
      {isNativeScreenReaderEnabled && (
        <Text style={styles.infoText}>
          El Modo Accesible de la app está desactivado porque se detectó un servicio de accesibilidad nativo (TalkBack/VoiceOver). La app usará la configuración nativa.
        </Text>
      )}
       {!isNativeScreenReaderEnabled && (
        <Text style={styles.infoText}>
          Activa esta opción si no usas TalkBack/VoiceOver pero deseas ayudas visuales o de navegación adicionales dentro de la app.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    flex: 1, // Allow text to wrap
    marginRight: 10,
  },
  infoText: {
      fontSize: 14,
      color: '#666',
      marginTop: 10,
  }
});

export default SettingsScreen;