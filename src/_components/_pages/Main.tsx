import React from 'react';
import * as styles from './Main.styles';

import Layout from '../Layout/Layout';

type MainProps = {
  children: React.ReactChildren;
};

const Main: React.FC<MainProps> = ({children}) => {
  return <Layout>{children}</Layout>;
};

export default Main;
