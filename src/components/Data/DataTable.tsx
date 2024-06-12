import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/DataTable.module.scss';

// Definir interface para representar a estrutura dos dados
interface Data {
  entity: string;
  year: number;
  plasticWaste: number;
  wasteManagement: number;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Data[]>([]); // Definir tipo para a variável de estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);  // Definir dados recebidos
      } catch (error) {
        console.error('Error fetching data:', error);  // Exibir erro no console
      }
    };
    fetchData();  // Chamar função fetchData na montagem do componente
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Entity</th>
          <th>Year</th>
          <th>Plastic Waste</th>
          <th>Waste Management</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.entity}</td>
            <td>{row.year}</td>
            <td>{row.plasticWaste}</td>
            <td>{row.wasteManagement}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
