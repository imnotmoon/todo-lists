import React from 'react';
import './Layout.style.scss';

type LayoutProps = {
    children?: React.ReactChildren | React.ReactChild | null;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className='layout'>{children}</div>;
}

export default Layout;