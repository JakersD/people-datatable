import React, { useState } from 'react';
import { Tab } from './tab';
import { ETabsTag } from '../models';
import styles from './table-tabs.module.scss';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(ETabsTag.all);

  const handleSetActiveTab = (tag: ETabsTag) => setActiveTab(tag);

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Tab
          setActiveTab={handleSetActiveTab}
          label='Все'
          tag={ETabsTag.all}
          isActive={activeTab === ETabsTag.all}
        />
        <Tab
          setActiveTab={handleSetActiveTab}
          label='Designers'
          tag={ETabsTag.designers}
          isActive={activeTab === ETabsTag.designers}
        />
        <Tab
          setActiveTab={handleSetActiveTab}
          label='Analysts'
          tag={ETabsTag.analytics}
          isActive={activeTab === ETabsTag.analytics}
        />
        <Tab
          setActiveTab={handleSetActiveTab}
          label='Managers'
          tag={ETabsTag.management}
          isActive={activeTab === ETabsTag.management}
        />
        <Tab
          setActiveTab={handleSetActiveTab}
          label='IOS'
          tag={ETabsTag.ios}
          isActive={activeTab === ETabsTag.ios}
        />
        <Tab
          setActiveTab={handleSetActiveTab}
          label='Android'
          tag={ETabsTag.android}
          isActive={activeTab === ETabsTag.android}
        />
      </div>
    </div>
  );
};
