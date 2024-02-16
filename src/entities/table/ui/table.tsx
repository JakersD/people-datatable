import React, { useEffect } from 'react';
import { fetchEmployees } from '../slice/employee-action';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import styles from './table.module.scss';
import { IEmployee } from '@/shared/models';
import { t } from 'i18next';
import { core } from '@/shared/i18n/ru/core';

export const Table: React.FC = () => {
  const { data } = useAppSelector((state) => state.employeeTable);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const renderFullName = (employee: IEmployee) => `${employee.firstName} ${employee.lastName}`;

  return (
    <div className={styles.wrapper}>
      {data.map((employee) => (
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
