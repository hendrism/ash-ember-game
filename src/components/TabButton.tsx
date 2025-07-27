import React from 'react';

interface TabButtonProps {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
  badge?: number;
}

export const TabButton: React.FC<TabButtonProps> = ({ id, icon: Icon, label, isActive, onClick, badge }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex flex-col items-center py-2 px-1 rounded-lg ${isActive ? 'bg-orange-500' : ''}`}
  >
    <Icon className="w-6 h-6" />
    <span>{label}</span>
    {badge !== undefined && <span className="badge">{badge}</span>}
  </button>
);