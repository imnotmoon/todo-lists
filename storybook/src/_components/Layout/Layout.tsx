import React from 'react';

type LayoutProps = {
  children?: React.ReactChild | React.ReactChildren;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
