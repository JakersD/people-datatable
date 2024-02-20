import React from 'react';
import styles from './tab-list.module.scss';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '@/_data/hooks';
import { EDepartment } from '@/_data/models/employee';
import { Tab } from '@/components';
import { core } from '@/_data/i18n/ru/core';
import { getUniqueDepartments } from './utils';
import { setActiveTabAction } from '@/_data/store/slice/employee-action';

export const TabList: React.FC = () => {
  const employee = useAppSelector((state) => state.employee.data);
  const activeTab = useAppSelector((state) => state.employee.filter.activeTab);

  const dispatch = useAppDispatch();

  const handleSetActiveTab = (tab: EDepartment) => {
    if (activeTab !== tab) {
      dispatch(setActiveTabAction(tab));
    }
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Tab
          setActiveTab={handleSetActiveTab}
          label={t(core.table.department[EDepartment.all])}
          tag={EDepartment.all}
          isActive={activeTab === EDepartment.all}
        />
        {getUniqueDepartments(employee)?.map((v) => (
          <Tab
            key={v}
            label={t(core.table.department[v])}
            tag={v}
            isActive={activeTab === v}
            setActiveTab={handleSetActiveTab}
          />
        ))}
      </div>
    </div>
  );
};
