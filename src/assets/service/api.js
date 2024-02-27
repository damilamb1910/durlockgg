import React, { useState, useEffect } from 'react';
import FacebookPixel from 'facebook-pixel';
import axios from 'axios';

const ConversionApi = () => {

    const enviarEvento = (evento) => {
        const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${TOKEN}`;
        const headers = {
          'Content-Type': 'application/json',
        };
      
        axios.post(url, evento, headers).then((response) => {
          console.log('Evento enviado correctamente:', response);
        }).catch((error) => {
          console.log('Error al enviar evento:', error);
        });
      };




  const [pixelInitialized, setPixelInitialized] = useState(false);

  useEffect(() => {
    // Inicializar el Pixel de Facebook
    if (!pixelInitialized) {
      FacebookPixel.init('YOUR_PIXEL_ID');
      setPixelInitialized(true);
    }
  
    // Define aquí la función que llamará a enviarEvento cuando sea necesario
    const handleSpecificAction = () => {
      const evento = {
        event_name: 'Purchase', // O el evento correspondiente a la acción
        event_value: 100,
        currency: 'USD',
      };
      enviarEvento(evento);
    };
  
    // Agrega un event listener para la acción específica
    // (reemplaza "mySpecificAction" con el evento real)
    window.addEventListener("mySpecificAction", handleSpecificAction);
  
    // Limpia el event listener en el desmontaje del componente
    return () => window.removeEventListener("mySpecificAction", handleSpecificAction);
  }, []);
  return (
    <div>
      <h1>Evento de compra enviado a Facebook</h1>
    </div>
  );
};

export default ConversionApi;