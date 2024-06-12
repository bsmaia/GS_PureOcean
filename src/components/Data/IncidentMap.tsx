import React, { useEffect } from 'react';
import styles from '../../styles/IncidentMap.module.scss';

const IncidentMap = () => {
  useEffect(() => {
    const loadMapScript = () => {
      // Verificar se o script da API do Google Maps já foi carregado
      if (!window.google || !window.google.maps) {
        // Criar um elemento script para carregar a API do Google Maps
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVOb-AhxoE11AsIkElRL07N1fGw44HD4I&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initMap; // Chamar a função initMap após o carregamento do script
        script.onerror = () => {
          console.error('Failed to load Google Maps API script');
        };
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      // Verificar se o elemento do mapa está presente no DOM
      const mapElement = document.getElementById('map');
      if (!mapElement) {
        console.error('Map element not found');
        return;
      }

      // Criar o mapa do Google
      const map = new window.google.maps.Map(mapElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Exemplo de marcador
      new window.google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map,
        title: 'Incident Location',
      });
    };

    loadMapScript(); // Carregar o script da API do Google Maps
  }, []);

  return <div id="map" className={styles.map} />;
};

export default IncidentMap;