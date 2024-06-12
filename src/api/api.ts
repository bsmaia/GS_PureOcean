import axios from 'axios';

const VIA_CEP_URL = 'https://viacep.com.br/ws'; // URL da API do ViaCEP

// Função para buscar dados de um CEP
export const fetchAddressByCep = async (cep: string) => {
  try {
    const response = await axios.get(`${VIA_CEP_URL}/${cep}/json`);
    return response.data; // Retorna os dados obtidos do ViaCEP
  } catch (error) {
    throw new Error('Erro ao buscar dados do ViaCEP');
  }
};

const GOOGLE_MAPS_API_KEY = 'AIzaSyDVOb-AhxoE11AsIkElRL07N1fGw44HD4I';

// Função para inicializar o mapa
export const initMap = () => {
  // Código para inicializar o mapa com a biblioteca do Google Maps JavaScript
};