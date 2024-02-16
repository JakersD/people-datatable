import React from 'react';

import { SGap } from './Gap.style';

interface IProps {
  size: number;
}

export const Gap: React.FC<IProps> = ({ size }) => {
  return <SGap size={size} />;
};
