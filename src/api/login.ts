import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Manipulador de login
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const response = await axios.post('URL_DA_API_JAVA/login', { email, password });
      res.status(200).json(response.data);  // Responder com dados recebidos
    } catch (error) {
      res.status(400).json({ message: 'Login failed' });  // Responder com erro
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}