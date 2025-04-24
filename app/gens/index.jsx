import React, { useRef, useState } from 'react'
import { FlatList, View, Dimensions, Text, Image, Pressable } from 'react-native'
import hambuger from '../../assets/images/hambuger.png'
import location from '../../assets/images/location.png'
import cupon from '../../assets/images/icons/cupon.png'
import { router } from 'expo-router'
import PromoCarousel from '../../components/PromoCarousel';
import CouponModal from '../../components/CouponModal';

const sampleCouponsData = [
    { id: 'c1', description: '20% de descuento en 2 hamburguesas sencillas', validFrom: '07/10/2024', validUntil: '04/12/2024', iconName: 'fast-food-outline' },
    { id: 'c2', description: '10% de descuento en 2 desayunos simples', validFrom: '07/10/2024', validUntil: '04/12/2024' },
    { id: 'c3', description: 'Bebida gratis en tu próxima compra', validFrom: '01/01/2025', validUntil: '31/01/2025', iconName: 'beer-outline' },
  ];

export default function index({ }) {
    const [isCouponModalVisible, setCouponModalVisible] = useState(false);
    const { width, height } = Dimensions.get('window');
    const carruRef = useRef(null);

    const openCouponModal = () => setCouponModalVisible(true);
    const closeCouponModal = () => setCouponModalVisible(false);

    const handleSelectCoupon = (coupon) => {
        console.log("Cupón seleccionado desde Home:", coupon.description);
        closeCouponModal();
    }

    const listOfItems = [{
        title: "¿Vamos por tu BigMc?",
        image: hambuger,
        url: '/gens/Mock'
    }, {
        title: "Gracias por visitarnos!",
        description: "Disfruta de beneficios exclusivos por estar dentro de la tienda",
        image: location,
        url: '/gens/Game'
    },]

    const fyp = [{
        title: "BigMc",
        price: 350
    }, {
        title: "McNífica",
        price: 100
    }, {
        title: "McTocino",
        price: 200
    },]

    return (
        <View className='px-3'>
            <View>
                <PromoCarousel listOfItems={listOfItems} />
            </View>

            <View>
                <Text className="font-bold text-2xl my-2 " >Para ti</Text>
                <FlatList
                    data={fyp}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.title}
                    renderItem={({ item, index }) => (
                        <Pressable className='mx-3 '
                            onPress={() => {
                                router.push('/gens/OrderPrev', {
                                    title: item.title,
                                    price: item.price,
                                    foods: [{
                                        id: 1,
                                        title: item.title,
                                        price: item.price,
                                        ingredients: [
                                            { name: 'Pan', amount: 1, basePrice: 5 },
                                            { name: 'Carne', amount: 1, basePrice: 20 },
                                            { name: 'Queso', amount: 1, basePrice: 10 },
                                        ]
                                    }]
                                })
                            }}>
                            <View key={index} className='bg-[#e1e1e1] rounded-lg' style={{ width: 120 }}>
                                <Image source={hambuger} className='m-auto' style={{ width: 100, height: 100 }} />
                            </View>
                            <Text className='font-bold' style={{ fontSize: 18 }}>{item.title}</Text>
                            <Text className='text-[#838383]' style={{ fontSize: 12 }}>{item.price}$</Text>
                        </Pressable>
                    )}
                >
                </FlatList>
            </View>
            <Pressable onPress={openCouponModal}>
                <View className='bg-[#E0E0E0] my-2 py-3'>
                    <View className='flex flex-row'>
                        <Image className='ml-3' style={{ width: 40, height: 40 }} source={cupon} />
                        <Text className='font-bold mx-2 my-auto' style={{ fontSize: 20 }}>Cupones</Text>
                    </View>
                    <Text className='mx-2'>
                        Presiona aqui para ver tus cupones
                    </Text>
                </View>
            </Pressable>

            <CouponModal
                visible={isCouponModalVisible}
                onClose={closeCouponModal}
                coupons={sampleCouponsData}
                onCouponPress={handleSelectCoupon}
            />
        </View>
    )
}
