import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Manipulador de registro
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password, address } = req.body;
    try {
      const response = await axios.post('URL_DA_API_JAVA/register', { name, email, password, address });
      res.status(201).json(response.data);  // Responder com dados recebidos
    } catch (error) {
      res.status(400).json({ message: 'Registration failed' });  // Responder com erro
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}