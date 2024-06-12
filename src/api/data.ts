import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Manipulador de obtenção de dados
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('URL_DA_API_JAVA/data');
    res.status(200).json(response.data);  // Responder com dados recebidos
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });  // Responder com erro
  }
}