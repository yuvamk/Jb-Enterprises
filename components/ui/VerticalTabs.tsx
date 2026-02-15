'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function VerticalTabs({ tabs, defaultTab }: VerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Vertical Tab Navigation */}
      <div className="lg:w-64 flex-shrink-0">
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                w-full text-left px-6 py-4 rounded-lg transition-all duration-300
                flex items-center gap-3 group
                ${
                  activeTab === tab.id
                    ? 'bg-industrial-orange text-white shadow-lg'
                    : 'bg-white text-navy-dark hover:bg-off-white border border-steel-light/30'
                }
              `}
            >
              {tab.icon && (
                <span
                  className={`
                    text-2xl transition-transform duration-300
                    ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'}
                  `}
                >
                  {tab.icon}
                </span>
              )}
              <span className="font-semibold">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-2 h-2 rounded-full bg-white"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-lg border border-steel-light/20"
            >
              {activeTabData.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
