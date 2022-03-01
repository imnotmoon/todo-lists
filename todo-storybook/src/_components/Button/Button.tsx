import React from 'react';
import './Button.style.scss';

type ButtonProps = {
    label: string;
    onClick: any;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button className='button' onClick={onClick}>
        {label}
    </button>
}

export default Button;