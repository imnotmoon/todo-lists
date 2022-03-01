import React from 'react';
import './Header.style.scss';

type HeaderProps = {
    
};

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <h1 className='header'>Todo-list storybook</h1>
    )
}

export default Header;