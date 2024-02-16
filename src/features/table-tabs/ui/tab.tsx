import React from 'react';
import { ETabsTag } from '../models';
import styles from './tab.module.scss';

interface IProps {
  label: string;
  tag: ETabsTag;
  isActive?: boolean;
  setActiveTab: (tag: ETabsTag) => void;
}

export const Tab: React.FC<IProps> = ({ label, tag, isActive, setActiveTab }) => {
  const handleClickTab = () => setActiveTab(tag);

  return (
    <button className={isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab} onClick={handleClickTab}>
      {label}
    </button>
  );
};
