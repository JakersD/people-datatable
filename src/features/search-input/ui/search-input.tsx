import React, { useState } from 'react';
import styles from './search-input.module.scss';
import { t } from 'i18next';
import { core } from '@/shared/i18n/ru/core';
import { searchNotActiveImg, searchActiveImg, searchDropdownImg } from '@/shared/assets';

export const SearchInput: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleChangeFocus = () => setActive(!active);

  return (
    <>
      <div className={styles.inputWrapper}>
        <img src={active ? searchActiveImg : searchNotActiveImg} alt='Поиск' />
        <input
          type='text'
          className={styles.input}
          placeholder={active ? '' : t(core.search.placeholder)}
          value={value}
          onChange={handleInputChange}
          onFocus={handleChangeFocus}
          onBlur={handleChangeFocus}
        />
        <img src={searchDropdownImg} alt='Фильтр' />
      </div>
    </>
  );
};
