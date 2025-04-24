import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet, Dimensions } from 'react-native'

const prizes = [
  'Cupón 10%',
  'Sigue intentando',
  'Cupón 20%',
  'Sigue intentando',
  'Cupón 50%',
  'Sigue intentando',
  'Cupón 100%',
  'Sigue intentando'
];

const { width } = Dimensions.get('window');
const WHEEL_SIZE = width * 0.80;
const NUM_SECTORS = prizes.length;
const ANGLE_PER_SECTOR = 360 / NUM_SECTORS;

function Game() {
  const spinAnim = useRef(new Animated.Value(0)).current;
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    if (spinning || hasSpun) return;
    setSpinning(true);
    setResult(null);
    setHasSpun(true);
    const winnerIndex = Math.floor(Math.random() * NUM_SECTORS);
    const vueltas = 5;
    const rotateTo = 360 * vueltas + (360 - winnerIndex * ANGLE_PER_SECTOR);
    Animated.timing(spinAnim, {
      toValue: rotateTo,
      duration: 3500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      setSpinning(false);
      setResult(prizes[winnerIndex]);
      spinAnim.setValue(rotateTo % 360);
    });
  };

  const renderSectors = () => {
    return prizes.map((label, i) => {
      const rotate = i * ANGLE_PER_SECTOR;
      return (
        <View
          key={i}
          style={{
            position: 'absolute',
            width: WHEEL_SIZE,
            height: WHEEL_SIZE,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotate: `${rotate}deg` }],
          }}
          accessible={false}
          importantForAccessibility="no"
        >
          <View
            style={{
              position: 'absolute',
              top: 20,
              left: WHEEL_SIZE / 2 - 60,
              width: 120,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: i % 2 === 0 ? '#FFD600' : '#fff',
              borderRadius: 20,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
            }}
            accessible={false}
            importantForAccessibility="no"
          >
            <Text style={[styles.sectorText, { color: i % 2 === 0 ? '#fff' : '#e53935', fontWeight: 'bold' }]} accessible={false} importantForAccessibility="no">{label}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prueba tu suerte</Text>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Animated.View
            style={{
              width: WHEEL_SIZE,
              height: WHEEL_SIZE,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ rotate: spinAnim.interpolate({
                inputRange: [0, 360 * 10],
                outputRange: ['0deg', '3600deg'],
              }) }],
            }}
            importantForAccessibility="no-hide-descendants"
          >
            {renderSectors()}
          </Animated.View>
          {/* Flecha arriba */}
          <View
            style={{
              position: 'absolute',
              top: -20,
              left: WHEEL_SIZE / 2 - 15,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              transform: [{ rotate: '180deg' }],
            }}
          >
            <View style={{ width: 0, height: 0, borderLeftWidth: 15, borderRightWidth: 15, borderBottomWidth: 30, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#e53935' }} />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, (spinning || hasSpun) && { backgroundColor: '#aaa' }]}
          onPress={spinWheel}
          disabled={spinning || hasSpun}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Girar</Text>
        </TouchableOpacity>
        {result && (
          <Text style={styles.resultText}>¡Obtuviste: {result}!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#e53935', textAlign: 'center' },
  button: {
    marginTop: 40,
    paddingVertical: 16,
    paddingHorizontal: 40,
    backgroundColor: '#e53935',
    borderRadius: 30,
    alignItems: 'center',
  },
  sectorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  resultText: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD600',
    textAlign: 'center',
    textShadowColor: '#e53935',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Game
