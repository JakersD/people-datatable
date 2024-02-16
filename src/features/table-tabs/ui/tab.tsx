import React from 'react';
import { EDepartment } from '@/shared/models';
import styles from './tab.module.scss';

interface IProps {
  label: string;
  tag: EDepartment;
  isActive?: boolean;
  setActiveTab: (tag: EDepartment) => void;
}

export const Tab: React.FC<IProps> = ({ label, tag, isActive, setActiveTab }) => {
  const handleClickTab = () => setActiveTab(tag);

  return (
    <button className={isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab} onClick={handleClickTab}>
      {label}
    </button>
  );
};
