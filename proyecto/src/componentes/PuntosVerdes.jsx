import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const PuntosVerdes = () => {
    const [userLocation, setUserLocation] = useState(null);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    useEffect(() => {
        function success(pos) {
            const crd = pos.coords;

            console.log("Tu ubicación actual es:");
            console.log(`Latitud : ${crd.latitude}`);
            console.log(`Longitud: ${crd.longitude}`);
            console.log(`Más o menos ${crd.accuracy} metros.`);

            setUserLocation({ latitude: crd.latitude, longitude: crd.longitude });
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    return (
        <>
        <h1 className='titulo'>Puntos verdes en tu zona!!</h1>
        <div className='posicionarMapa'>
            {userLocation && (
                <iframe
                src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52529.257526780086!2d${userLocation.longitude}!3d${userLocation.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spuntos%20verdes%20caba!5e0!3m2!1ses-419!2sar!4v1693248274440!5m2!1ses-419!2sar`}
                width="600" 
                height="450" 
                allowFullScreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                />
            )}
        </div>
        </>
    )
}

export default PuntosVerdes;
