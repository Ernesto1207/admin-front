import React from 'react';

const Categoria = () => {
    const categorias = [
        { id: 1, nombre: 'Tecnología' },
        { id: 2, nombre: 'Hogar' },
        { id: 3, nombre: 'Moda' },
        { id: 4, nombre: 'Deportes' },
    ];

    return (
        <div className='text-white'>
            <h1 className='text-3xl'>Categorías</h1>
            <ul className='p-10'>
                {categorias.map(categoria => (
                    <li key={categoria.id}>{categoria.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categoria;