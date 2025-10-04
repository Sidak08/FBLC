"use client";

import { useState } from "react";

export default function TeamNav({ activeTab = "admins", onTabChange }) {
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

  const handleTabClick = (tabId, tabLabel) => {
    setActive(tabId);
    if (onTabChange) {
      onTabChange(tabId, tabLabel);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="bg-[#1E293B] rounded-xl p-2 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.label)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              tab.id === active
                ? "bg-[#1E40AF] text-white"
                : tab.active && (tab.id === "special" || tab.id === "marketing")
                  ? "text-white hover:bg-[#1E40AF]/20"
                  : "text-[#93C5FD] hover:text-white hover:bg-[#1E40AF]/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
