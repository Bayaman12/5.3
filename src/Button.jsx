import React from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from './redux/reducers/car';

const Button = ({ onClick, label }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(addCar());
                onClick();
            }}>{label}</button>
        </div>
    );
}

export default Button;
