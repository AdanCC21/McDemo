export const getDistanceInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en kilómetros

    // Convertir las coordenadas de grados a radianes
    const distanceLat = ((lat2 - lat1) * Math.PI) / 180;
    const distanceLon = ((lon2 - lon1) * Math.PI) / 180;

    // Calcular la distancia
    const a =
        Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
            Math.cos(lat2 * Math.PI / 180) *
            Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Regresar la distancia en metros
    return R * c * 1000; // en metros
};
