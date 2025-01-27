import React from 'react';

const tables = [
    { id: 1, number: 1, status: 'available' },
    { id: 2, number: 2, status: 'occupied' },
    { id: 3, number: 3, status: 'reserved' },
    { id: 4, number: 4, status: 'available' },
    { id: 5, number: 5, status: 'occupied' },
];

const Table = ({ number, status }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'available':
                return 'green';
            case 'occupied':
                return 'red';
            case 'reserved':
                return 'orange';
            default:
                return 'gray';
        }
    };

    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: getStatusColor(status) }}>
            <h3>Table {number}</h3>
            <p>Status: {status}</p>
        </div>
    );
};

const Mesas = () => {
    return (
        <div className='text-white'>
            <h1>Restaurant Tables</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {tables.map((table) => (
                    <Table key={table.id} number={table.number} status={table.status} />
                ))}
            </div>
        </div>
    );
};

export default Mesas;