import React, { useEffect } from 'react';
import styles from './table.module.scss';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector, useFirstRender } from '@/_data/hooks';
import { fetchEmployees, filterData } from '@/_data/store/slice/employee-action';
import { IEmployee } from '@/_data/models/employee';
import { core } from '@/_data/i18n/ru/core';
import { showData, sortData } from './utils';

export const Table: React.FC = () => {
  const { data, filter, filteredData } = useAppSelector((state) => state.employee);

  const dispatch = useAppDispatch();
  const firstRender = useFirstRender();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  useEffect(() => {
    if (!firstRender) {
      dispatch(filterData());
    }
  }, [filter]);

  const renderFullName = (employee: IEmployee) => `${employee.firstName} ${employee.lastName}`;

  return (
    <div className={styles.wrapper}>
      {sortData(showData(data, filteredData), filter.sort).map((employee) => (
        <div className={styles.employee} key={employee.id}>
          <div className={styles.avatar}>
            <img src={employee.avatarUrl} alt='Сотрудник' />
          </div>
          <div className={styles.info}>
            <p className={styles.firstName}>
              {renderFullName(employee)}
              <span>{employee.userTag}</span>
            </p>
            <p className={styles.department}>{t(core.table.department[employee.department])}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
