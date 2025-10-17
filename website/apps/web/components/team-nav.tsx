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
    { id: "operations", label: "Operations", active: false },
    { id: "education", label: "Education", active: false },
    { id: "recruitment", label: "Recruitment & Service", active: false },
    { id: "special", label: "Special Functions", active: true },
    { id: "marketing", label: "Marketing", active: true },
    { id: "juniors", label: "Juniors", active: false },
  ];

  const handleTabClick = (tabId: string, tabLabel: string) => {
    setActive(tabId);
    if (onTabChange) {
      onTabChange(tabId, tabLabel);
    }
  };

  return (
    <div
      className="w-full flex justify-center px-24"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      <div className="bg-[#334155] rounded-lg p-1 px-24 flex gap-10 max-w-fit min-h-[65px] items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.label)}
            className={`px-5 py-3 rounded-md font-medium transition-all duration-200 whitespace-nowrap h-[60px] flex items-center ${
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
  );
}
