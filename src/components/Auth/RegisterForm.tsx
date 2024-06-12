import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');

  // Função para lidar com o registro
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { name, email, password, address });
      console.log(response.data);  // Exibir resposta no console
    } catch (error) {
      console.error('Registration failed:', error);  // Exibir erro no console
    }
  };

  // Função para buscar endereço via CEP
  const fetchAddress = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data.logradouro);  // Definir endereço
    } catch (error) {
      console.error('Error fetching address:', error);  // Exibir erro no console
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <label>CEP</label>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} required onBlur={() => fetchAddress(cep)} />
      <label>Address</label>
      <input type="text" value={address} readOnly />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;