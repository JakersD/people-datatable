import React, { useState } from 'react';
import styles from './search-input.module.scss';
import { t } from 'i18next';
import { core } from '@/shared/i18n/ru/core';

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <input
      type='text'
      className={styles.input}
      placeholder={t(core.search.placeholder)}
      value={value}
      onChange={handleInputChange}
    />
  );
};
