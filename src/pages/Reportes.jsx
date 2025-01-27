import React, { useState } from 'react';

const Reportes = () => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Reporte 1', date: '2023-01-01' },
    { id: 2, name: 'Reporte 2', date: '2023-02-01' },
    { id: 3, name: 'Reporte 3', date: '2023-03-01' },
  ]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='text-white'>
      <h1 className='text-3xl'>Reportes</h1>
      <input
        type="text"
        placeholder="Filtrar reportes"
        value={filter}
        onChange={handleFilterChange}
        className='p-2 rounded-lg border-cyan-500 border-2'
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reportes;