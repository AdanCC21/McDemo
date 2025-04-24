import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CouponCard from './CouponCard';

// --- Componente Modal ---
// Props esperadas:
// - visible (boolean): Controla si el modal se muestra o no.
// - onClose (function): Función que se llama para cerrar el modal.
// - coupons (array): Lista de objetos, cada uno con datos para un CouponCard.
//   (ej: [{ id: 1, description: '...', validFrom: '...', validUntil: '...' }, ...])
// - onCouponPress (function, opcional): Función a llamar cuando se presiona un cupón específico.

export default function CouponModal({ visible, onClose, coupons = [], onCouponPress }) {

  // Función para manejar el press en un cupón individual
  const handleCouponPress = (coupon) => {
    if (onCouponPress) {
      onCouponPress(coupon);
    }
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Tus Cupones</Text>
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close-outline" size={30} color="#555" />
            </Pressable>
          </View>

          <ScrollView style={styles.listContainer}>
            {coupons.map((coupon, index) => (
              <CouponCard
                key={coupon.id || index}
                description={coupon.description}
                validFrom={coupon.validFrom}
                validUntil={coupon.validUntil}
                iconName={coupon.iconName}
                onPress={onCouponPress ? () => handleCouponPress(coupon) : undefined}
                style={styles.couponCardStyle}
              />
            ))}
            {coupons.length === 0 && (
                <Text style={styles.noCouponsText}>No tienes cupones disponibles.</Text>
            )}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 5,
    borderColor: '#fcd34d',
    padding: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  couponCardStyle: {
    marginHorizontal: 0,
    marginVertical: 6,
  },
  noCouponsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 30,
    marginBottom: 30,
  }
});