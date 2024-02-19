import React from 'react';
import styles from './radio-btn.module.scss';
import { ESort } from '../model/sort';

interface IProps {
  children: string;
  sort: ESort;
  setSorting: (sort: ESort) => void;
  isActive?: boolean;
}

export const RadioBtn: React.FC<IProps> = ({ children, setSorting, sort, isActive }) => {
  const handleSetSort = () => setSorting(sort);

  return (
    <div className={styles.radioWrapper} onClick={handleSetSort}>
      <div className={isActive ? `${styles.radio} ${styles.radioActive}` : styles.radio} />
      <p className={styles.text}>{children}</p>
    </div>
  );
};
