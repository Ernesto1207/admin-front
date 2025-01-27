import React, { useState } from 'react';

const Pedidos = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState('');

    const handleAddOrder = () => {
        if (newOrder.trim()) {
            setOrders([...orders, newOrder]);
            setNewOrder('');
        }
    };

    return (
        <div className='text-white'>
            <h1 className='text-3xl pb-10'>Pedidos</h1>
            <input
                type="text"
                value={newOrder}
                onChange={(e) => setNewOrder(e.target.value)}
                placeholder="Ingrese un nuevo pedido"
                className=''
            />
            <button onClick={handleAddOrder} className='mx-10 border-2'>Agregar Pedido</button>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{order}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pedidos;