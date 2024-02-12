import React from 'react';
import { t } from 'i18next';
import styles from './search.module.scss';

import { core } from '@/shared/i18n/ru/core';
import { SearchInput } from '@/features/search-input';

export const Search: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>{t(core.search.title)}</h1>
      <SearchInput />
    </div>
  );
};
