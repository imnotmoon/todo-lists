import React from 'react';
import './Button.style.scss';

type ButtonProps = {
    label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button className='button'>
        {label}
    </button>
}

export default Button;