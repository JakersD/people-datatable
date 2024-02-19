import React, { useState } from 'react';
import styles from './sort-modal.module.scss';
import { t } from 'i18next';
import { core } from '@/shared/i18n/ru/core';
import { closeIcon } from '@/shared/assets';
import { RadioBtn } from './radio-btn';
import { ESort } from '../model/sort';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { setActiveSort } from '../actions/sort';

const getSortItems = () => [
  {
    text: t(core.search.sorting.by_default),
    sort: ESort.default,
  },
  {
    text: t(core.search.sorting.by_words),
    sort: ESort.words,
  },
  {
    text: t(core.search.sorting.by_birthday),
    sort: ESort.birthday,
  },
];

export const useSortModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeSort = useAppSelector((state) => state.employeeTable.filter.sort);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleSetSorting = (sort: ESort) => dispatch(setActiveSort(sort));

  const SortModal = () => (
    <div className={styles.modalWrapper} onClick={handleCloseModal}>
      <div className={styles.wrapper}>
        <div className={styles.titleBlock}>
          <p className={styles.title}>{t(core.search.sorting.title)}</p>
          <button className={styles.btn} onClick={handleCloseModal}>
            <img src={closeIcon} alt='Кнопка закрыть' />
          </button>
        </div>
        {getSortItems().map((v, i) => (
          <RadioBtn
            sort={v.sort}
            isActive={activeSort === v.sort}
            setSorting={handleSetSorting}
            key={`${v.text}+${i}`}
          >
            {v.text}
          </RadioBtn>
        ))}
      </div>
    </div>
  );

  return [SortModal, openModal];
};
