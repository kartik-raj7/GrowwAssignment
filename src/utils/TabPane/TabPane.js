import React, { useState } from 'react';
import style from './style.module.scss'
const TabPane = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className='w-80 flex align-center justify-center flex-column'>
      <div className='flex'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={tab.id === activeTab ? style.active : style.inactive}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div key={tab.id} className={tab.id == activeTab ? style.activetab : style.inactivetab}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabPane;
