import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './sort-modal.module.scss';
import { t } from 'i18next';
import { core } from '@/_data/i18n/ru/core';
import { closeIcon } from '@/assets';
import { RadioBtn } from './radion-btn/radion-btn';
import { getSortItems } from './utils';
import { useAppDispatch, useAppSelector } from '@/_data/hooks';
import { setSorting } from '@/_data/store/slice/employee-action';
import { ESort } from '@/_data/models/employee';

const portal = document.getElementById('modal');

interface IProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export const SortModal: React.FC<IProps> = ({ isOpen, toggleModal }) => {
  const activeSort = useAppSelector((state) => state.employee.filter.sort);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSetSorting = (sort: ESort) => {
    if (sort !== activeSort) {
      dispatch(setSorting(sort));
    }
  };

  return ReactDOM.createPortal(
    <>
      {isOpen ? (
        <div className={styles.modalWrapper} onClick={toggleModal}>
          <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.titleBlock}>
              <p className={styles.title}>{t(core.search.sorting.title)}</p>
              <button className={styles.btn} onClick={toggleModal}>
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
      ) : (
        <></>
      )}
    </>,
    portal as HTMLElement,
  );
};
