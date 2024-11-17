import React from 'react';
import { useSelector } from 'react-redux';

const Count = ({ count }) => {
    const cars = useSelector((store) => store.car.cars);

    return (
        <div>
            <h1>Счётчик: {count}</h1>
            {cars.map(item => (
                <h1 key={item.model}>{item.model}</h1>
            ))}
        </div>
    );
}

export default Count;
