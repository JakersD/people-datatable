import React, { useRef, useState } from 'react';
import styles from './search-input.module.scss';
import { t } from 'i18next';
import { core } from '@/shared/i18n/ru/core';
import { searchImg, searchActiveImg, searchDropdownImg } from '@/shared/assets';

export const SearchInput: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<any>(null);

  const handleChangeFocus = () => setActive(!active);
  const handleFocus = () => inputRef.current.focus();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleSortingClick = (e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation();

  return (
    <div className={styles.inputWrapper} onClick={handleFocus}>
      <img src={active ? searchActiveImg : searchImg} alt='Поиск' />
      <input
        type='text'
        className={styles.input}
        placeholder={active ? '' : t(core.search.placeholder)}
        value={value}
        onClick={(e) => e.stopPropagation()}
        onChange={handleInputChange}
        onFocus={handleChangeFocus}
        onBlur={handleChangeFocus}
        ref={inputRef}
      />
      <button className={styles.sortBtn} onClick={handleSortingClick}>
        <img src={searchDropdownImg} alt='Фильтр' />
      </button>
    </div>
  );
};
