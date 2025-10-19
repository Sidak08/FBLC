"use client";

import { useState } from "react";

interface TeamNavProps {
  activeTab?: string;
  onTabChange?: (tabId: string, tabLabel: string) => void;
}

export function TeamNav({ activeTab = "admins", onTabChange }: TeamNavProps) {
  const [active, setActive] = useState(activeTab);

  const tabs = [
    { id: "admins", label: "Admins", active: true },
    { id: "presidential", label: "Presidential Office", active: true },
    { id: "education", label: "Education", active: true },
    { id: "special", label: "Special Functions", active: true },
    { id: "operations", label: "Operations", active: true },
    { id: "marketing", label: "Marketing", active: true },
    { id: "recruitment", label: "Recruitment", active: true },
  ];

  const handleTabClick = (tabId: string, tabLabel: string) => {
    setActive(tabId);
    if (onTabChange) {
      onTabChange(tabId, tabLabel);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-[50px]">
      <div className="w-full max-w-7xl overflow-x-auto">
        <div className="bg-[#334155] rounded-lg p-1 sm:p-2 lg:p-1 flex gap-2 sm:gap-4 lg:gap-10 min-h-[52px] sm:min-h-[60px] lg:min-h-[65px] items-center justify-start sm:justify-center min-w-max sm:min-w-0 px-4 sm:px-8 lg:px-24">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.label)}
              className={`px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 whitespace-nowrap h-[44px] sm:h-[52px] lg:h-[60px] flex items-center text-xs sm:text-sm lg:text-base min-h-[44px] touch-manipulation ${
                tab.id === active
                  ? "bg-[#1E40AF] text-white shadow-sm"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
