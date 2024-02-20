import React from 'react';
import { t } from 'i18next';
import styles from './search.module.scss';
import { core } from '@/_data/i18n/ru/core';
import { SearchInput } from '@/components';

export const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t(core.search.title)}</h1>
      <SearchInput />
    </div>
  );
};
