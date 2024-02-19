import React from 'react';
import { t } from 'i18next';
import styles from './search.module.scss';

import { core } from '@/shared/i18n/ru/core';
import { SearchInput } from '@/features/search-input';
import { Gap } from '@/shared/ui';
import { SortModal } from '@/features/sort-modal';

export const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Gap size={8} />
      <h1 className={styles.title}>{t(core.search.title)}</h1>
      <SearchInput />
      <SortModal />
    </div>
  );
};
