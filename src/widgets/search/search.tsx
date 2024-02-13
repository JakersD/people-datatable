import React from 'react';
import { t } from 'i18next';
import styles from './search.module.scss';

import { core } from '@/shared/i18n/ru/core';
import { SearchInput } from '@/features/search-input';
import { Gap } from '@/shared/ui';

export const Search: React.FC = () => {
  return (
    <>
      <Gap size={8} />
      <h1 className={styles.title}>{t(core.search.title)}</h1>
      <SearchInput />
    </>
  );
};
