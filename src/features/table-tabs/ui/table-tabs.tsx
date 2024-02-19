import React, { useState } from 'react';
import { Tab } from './tab';
import { EDepartment } from '@/shared/models';
import styles from './table-tabs.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { t } from 'i18next';
import { core } from '@/shared/i18n/ru/core';
import { getDepartments } from '../utils/tab';
import { setActiveTabAction } from '../actions/tab-action';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(EDepartment.all);

  const dispatch = useAppDispatch();

  const employee = useAppSelector((state) => state.employeeTable.data);

  const handleSetActiveTab = (tag: EDepartment) => {
    setActiveTab(tag);
    dispatch(setActiveTabAction(tag));
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
        {getDepartments(employee)?.map((v) => (
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
