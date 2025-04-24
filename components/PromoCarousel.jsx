import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function PromoCarousel({ listOfItems }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <FlatList
        data={listOfItems}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / (width * 0.8 + width * 0.1 * 2)
          );
          setActiveIndex(index);
        }}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={{
              width: width * 0.75,
              height: height * 0.2,
              marginHorizontal: width * 0.08,
              alignSelf: 'center',
              backgroundColor: '#e53935',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              position: 'relative',
              overflow: 'hidden',
              elevation: 5,
            }}
            onPress={() => {
              if (item.url) {
                // Si la URL comienza con http, abrir externo. Si no, usar router.push
                if (item.url.startsWith('http')) {
                  // Linking es de 'react-native'
                  import('react-native').then(({ Linking }) => {
                    Linking.openURL(item.url);
                  });
                } else {
                  // router es de expo-router
                  import('expo-router').then(({ router }) => {
                    router.push(item.url);
                  });
                }
              }
            }}
          >
            {/* Círculo amarillo con imagen adentro */}
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: '#FFD600',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              {item.image && (
                <Image
                  source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                  }}
                />
              )}
            </View>
            {/* Texto a la derecha */}
            <View style={{ flex: 1, justifyContent: 'center', marginRight: 10 }}>
              <Text style={{ color: '#FFD600', fontSize: 28, fontWeight: 'bold', textAlign: 'right' }}>
                {item.title}
              </Text>
              {item.description && (
                <Text style={{ color: 'black', fontSize: 18, textAlign: 'right', marginTop: 10,marginRight:5 }}>
                  {item.description}
                </Text>
              )}
            </View>
          </Pressable>
        )}
      />
      {/* Indicadores de paginación */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {listOfItems.map((_, i) => (
          <View
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: i === activeIndex ? '#FFD600' : '#ccc',
              margin: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
}
