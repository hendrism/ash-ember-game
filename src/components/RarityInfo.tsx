import React from 'react';

interface RarityInfoProps {
  rarity: string;
  onClose: () => void;
}

export const RarityInfo: React.FC<RarityInfoProps> = ({ rarity, onClose }) => {
  const rarityData: Record<string, any> = {
    common: { name: 'Common', color: 'text-gray-300', description: 'Basic materials...', chance: '65%' },
    // ... other rarities ...
  };
  const data = rarityData[rarity];
  return (
    <div className="modal">
      <h2 className={data.color}>{data.name}</h2>
      <p>{data.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};