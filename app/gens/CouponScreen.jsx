import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import CouponModal from '../../components/CouponModal';
import hamburgerImage from '../../assets/images/hambuger.png';
import userIconPlaceholder from '../../assets/images/icons/profile_placeholder.png';
import couponIcon from '../../assets/images/icons/cupon.png';

const { width } = Dimensions.get('window');

// --- Datos de Ejemplo ---
const sampleParaTiData = [
  { id: 'pt1', title: 'Titulo del combo', price: '150$', image: hamburgerImage },
  { id: 'pt2', title: 'Titulo del combo un poco mas largo', price: '250$', image: hamburgerImage },
  { id: 'pt3', title: 'Tercer combo', price: '299$', image: hamburgerImage },
  { id: 'pt4', title: 'Otro combo', price: '180$', image: hamburgerImage },
];

const sampleCouponsData = [
  { id: 'c1', description: '20% de descuento en 2 hamburguesas sencillas', validFrom: '07/10/2024', validUntil: '04/12/2024', iconName: 'fast-food-outline' },
  { id: 'c2', description: '10% de descuento en 2 desayunos simples', validFrom: '07/10/2024', validUntil: '04/12/2024' },
  { id: 'c3', description: 'Bebida gratis en tu próxima compra', validFrom: '01/01/2025', validUntil: '31/01/2025', iconName: 'beer-outline' },
];


export default function NewHomeScreen() {
  const [isCouponModalVisible, setCouponModalVisible] = useState(false);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0); // Para los puntos de paginación

  const openCouponModal = () => setCouponModalVisible(true);
  const closeCouponModal = () => setCouponModalVisible(false);

  const handleSelectCoupon = (coupon) => {
    console.log("Cupón seleccionado desde Home:", coupon.description);
    closeCouponModal();
  }

  const renderParaTiItem = ({ item }) => (
    <Pressable style={styles.paraTiItem}>
      <Image source={item.image} style={styles.paraTiItemImage} resizeMode="contain" />
      <Text style={styles.paraTiItemTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.paraTiItemPrice}>{item.price}</Text>
    </Pressable>
  );

  // Componente para renderizar los puntos de promos (bolita amarilla)
  const renderPaginationDots = () => (
    <View style={styles.paginationContainer}>
      {/* Asumiendo que solo hay una promo por ahora */}
      {[0].map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === currentPromoIndex ? styles.paginationDotActive : {}
          ]}
        />
      ))}
    </View>
  );


  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <Pressable>
           
          </Pressable>
          
          <View style={styles.headerRightIcons}>
            <Pressable style={{ marginRight: 15 }}>
              
            </Pressable>
            <Pressable>
            </Pressable>
          </View>
        </View>

        <View style={styles.promoCard}>
          <Image source={hamburgerImage} style={styles.promoImage} resizeMode="contain" />
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoText}>Promoción del día</Text>
          </View>
          <View style={styles.yellowCircle}></View>
        </View>

        {renderPaginationDots()}

        <View style={styles.paraTiSection}>
          <View style={styles.paraTiHeader}>
            <Image source={userIconPlaceholder} style={styles.paraTiIcon} />
            <Text style={styles.paraTiTitle}>Para ti</Text>
          </View>
          <FlatList
            horizontal
            data={sampleParaTiData}
            renderItem={renderParaTiItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.paraTiListContainer}
          />
        </View>

        <Pressable style={styles.cuponesSection} onPress={openCouponModal}>
          <View style={styles.cuponesHeader}>
             <Image source={couponIcon} style={styles.cuponesIcon} />
            <Text style={styles.cuponesTitle}>Cupones</Text>
          </View>
          <Text style={styles.cuponesDescription}>
            Lorem impsum nwoda dnndsd ajwnd lbladlad wa kdnaksn wknd lkwn asdiw wnuiebasd
          </Text>
        </Pressable>

      </ScrollView>

      <CouponModal
        visible={isCouponModalVisible}
        onClose={closeCouponModal}
        coupons={sampleCouponsData}
        onCouponPress={handleSelectCoupon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#f8f8f8',
  },
  headerIconPerson: {
    width: 28,
    height: 28,
    tintColor: '#333',
  },
  headerLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#facc15',
  },
  headerRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    minHeight: 120,
  },
  promoImage: {
    width: 100,
    height: 80,
    marginLeft: 0,
    marginRight: 10,
  },
  promoTextContainer: {
    flex: 1,
    paddingLeft: 5,
    zIndex: 1,
  },
  promoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  yellowCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fcd34d',
    position: 'absolute',
    right: 25,
    top: 20,
    zIndex: 0,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#fcd34d',
  },
  paraTiSection: {
    marginTop: 10,
    marginBottom: 20,
  },
  paraTiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  paraTiIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  paraTiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paraTiListContainer: {
    paddingHorizontal: 15,
  },
  paraTiItem: {
    width: width * 0.4,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  paraTiItemImage: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    marginBottom: 8,
  },
  paraTiItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
    minHeight: 34,
  },
  paraTiItemPrice: {
    fontSize: 12,
    color: '#888',
  },
  cuponesSection: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cuponesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
   cuponesIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#333'
  },
  cuponesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cuponesDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});