import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAccessibility } from '../../AccessibilityContext';

export default function DiscapacidadesScreen() {
  const { width, height } = Dimensions.get('window');
  const [disc, setDisc] = useState([false, false, false, false]);
  const router = useRouter();
  const { triggerManualAccessibilityOffer } = useAccessibility();

  const handlePress = (index) => {
    const temp = [...disc];
    temp[index] = !temp[index];
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
    router.push('/screens/Home');
  };

  return (
    <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }} className='bg-[#d62718]'>
      <View>
        <Text style={{ color: 'white' }}>Dificultades</Text>
        <Text style={{ color: 'white' }}>¿Cuentas con alguna de las siguientes dificultades?</Text>
      </View>
      <ScrollView>
        {['Sordera', 'Cegera', 'Motriz', 'Ninguna'].map((label, index) => (
          <View key={index} style={styles.discap}>
            <Text style={{ color: 'white' }}>{label}</Text>
            <Pressable onPress={() => handlePress(index)}>
              <View style={{ width: 10, height: 10 }} className={disc[index] ? 'bg-[#eeFF00]' : 'bg-[#0000ff]'} />
            </Pressable>
          </View>
        ))}

        <Pressable onPress={() => router.push('gens')}>
          <Text style={{ color: 'white' }}>Continuar</Text>
        </Pressable>

        {disc[2] && (
          <Pressable onPress={handleContinuar} style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Activar modo accesible y continuar</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  discap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
