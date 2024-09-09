import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState({ latidute: null, longitude: null });

  useEffect(() => {

    const onSuccess = (position) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    };

    const onError = (error) => {
      console.log('Ops! Erro ao obter a localização');
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  }, []);

  return { coordinates }

}

export default useGeolocation;