import { useEffect } from 'react';
import * as Location from 'expo-location';
import PushNotification from 'expo-notifications'; 
import { McDonaldsLocations } from '../utils/mcdonaldsLocations';
import { getDistanceInMeters } from '../utils/distance';

const LocationMonitor = () => {
    useEffect(() => {
        const startMonitoring = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permiso de ubicación denegado');
                return;
            }

            const checkNearby = async () => {
                const location = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = location.coords;


                console.log('Latitude', latitude);
                console.log('Longitude', longitude);

                for (const mcd of McDonaldsLocations) {
                    const distance = getDistanceInMeters(latitude, longitude, mcd.lat, mcd.lon);
                    const walkingTime = distance / 1.4; // en segundos
                    const prepTime = 45; // promedio en segundos
                    console.log('Distance', distance);

                    if (walkingTime >= prepTime && distance < 2500) {
                        console.log(`🍔 Tu Big Mac te espera`);
                        console.log(`Estás a ${Math.round(distance)}m de ${mcd.name}. Si pides ahora, tu Big Mac estará lista cuando llegues.`);
                        await PushNotification.scheduleNotificationAsync({
                            content: {
                                title: '🍔 Tu Big Mac te espera',
                                body: `Estás a ${Math.round(distance)}m de ${mcd.name}. Si pides ahora, tu Big Mac estará lista cuando llegues.`,
                            },
                        });
                        break;
                    }
                }
            };

            const interval = setInterval(checkNearby, 5000); // cada 5s
            return () => clearInterval(interval);
        };

        startMonitoring();
    }, []);

    return null;
};

export default LocationMonitor;
