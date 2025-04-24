import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAccessibility } from '../../AccessibilityContext';

export default function Discapacidades() {
  const { width, height } = Dimensions.get('window');
  const [disc, setDisc] = useState([false, false, false, false]);
  const router = useRouter();
  const { triggerManualAccessibilityOffer } = useAccessibility();

  const handlePress = (index) => {
    const temp = [...disc];
    temp[index] = !temp[index];

    // Si se selecciona "Ninguna", se deseleccionan las demás
    if (index === 3 && temp[3]) {
      temp[0] = false; temp[1] = false; temp[2] = false;
    } else if (index !== 3 && temp[3]) {
      temp[3] = false;
    }

    setDisc(temp);
  };

  const handleContinuar = () => {
    const isMotrizSelected = disc[2];
    if (isMotrizSelected) {
      triggerManualAccessibilityOffer();
    }
    router.push('/gens');
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <ScrollView contentContainerStyle={[styles.scrollContent,{width:width*0.8, height:height, marginHorizontal:width*0.1}]}>
        <View style={styles.header}>
          <Text style={styles.title}>Dificultades</Text>
          <Text style={styles.subtitle}>¿Cuentas con alguna de las siguientes dificultades?</Text>
        </View>

        {['Sordera', 'Cegera', 'Motriz', 'Ninguna'].map((label, index) => (
          <View key={index} style={styles.discap}>
            <Text style={styles.label}>{label}</Text>
            <Pressable onPress={() => handlePress(index)}>
              <View style={[
                styles.checkbox,
                { backgroundColor: disc[index] ? '#eeFF00' : '#0000ff' }
              ]} />
            </Pressable>
          </View>
        ))}

        <Pressable onPress={handleContinuar} style={styles.continueButton}>
          <Text style={styles.continueButtonText}>
            {disc[2] ? 'Activar modo accesible y continuar' : 'Continuar'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d62718',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {

    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  discap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  continueButton: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 10,

    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
