import React from 'react';

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
];

const Productos = () => {
    return (
        <div className='text-white'>
            <h1>Lista de Productos</h1>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;