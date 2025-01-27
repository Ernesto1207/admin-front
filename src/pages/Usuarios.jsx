import React, { useEffect, useState } from 'react';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Static list of users
    const staticUsuarios = [
      { id: 1, nombre: 'Juan Perez', email: 'juan.perez@example.com' },
      { id: 2, nombre: 'Maria Lopez', email: 'maria.lopez@example.com' },
      { id: 3, nombre: 'Carlos Sanchez', email: 'carlos.sanchez@example.com' },
    ];
    setUsuarios(staticUsuarios);
  }, []);

  return (
    <div className='text-white'>
      <h1 className='text-3xl'>Lista de Usuarios</h1>
      <ul className='p-10'>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;