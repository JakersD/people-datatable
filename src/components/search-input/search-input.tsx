import React, { useEffect, useRef, useState } from 'react';
import styles from './search-input.module.scss';
import { t } from 'i18next';
import { searchActiveImg, searchDropdownImg, searchImg } from '@/assets';
import { core } from '@/_data/i18n/ru/core';
import { SortModal } from '../sort-modal/sort-modal';
import { useModal } from '@/_data/hooks/useModal';
import { useAppDispatch, useFirstRender } from '@/_data/hooks';
import { setSearch } from '@/_data/store/slice/employee-action';

export const SearchInput: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<any>(null);

  const [isOpen, toggleModal] = useModal();
  const isFirstRender = useFirstRender();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isFirstRender) {
      dispatch(setSearch(value));
    }
  }, [value]);

  const handleChangeFocus = () => setActive(!active);
  const handleFocus = () => inputRef.current.focus();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation();
  const handleSortingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleModal();
  };

  return (
    <>
      <div className={styles.inputWrapper} onClick={handleFocus}>
        <img src={active ? searchActiveImg : searchImg} alt='Поиск' />
        <input
          type='text'
          className={styles.input}
          placeholder={active ? '' : t(core.search.placeholder)}
          value={value}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onFocus={handleChangeFocus}
          onBlur={handleChangeFocus}
          ref={inputRef}
        />
        <button className={styles.sortBtn} onClick={handleSortingClick}>
          <img src={searchDropdownImg} alt='Фильтр' />
        </button>
      </div>
      <SortModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
};
