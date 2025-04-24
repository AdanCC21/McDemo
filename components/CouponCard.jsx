import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CouponCard({
  iconName = "pricetag-outline",
  description,
  validFrom,
  validUntil,
  onPress,
  style
}) {

  const cardContent = (
    <>
      <View style={styles.contentRow}>
        <Ionicons name={iconName} size={24} color="#444" style={styles.icon} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.validity}>
        Válido desde el {validFrom} hasta el {validUntil}
      </Text>
    </>
  );

  if (onPress) {
    return (
      <Pressable style={[styles.cardContainer, style]} onPress={onPress}>
        {cardContent}
      </Pressable>
    );
  }

  return (
    <View style={[styles.cardContainer, style]}>
      {cardContent}
    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.0,
    elevation: 3,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 12,
  },
  description: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    lineHeight: 22,
  },
  validity: {
    fontSize: 12,
    color: '#888888',
  },
});