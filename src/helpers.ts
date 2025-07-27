// src/helpers.ts
import { ITEMS } from './constants/items';
import { GAME_CONFIG } from './constants/gameConfig';

// Basic processing recipes
export const RECIPES = {
  forestInfusion: {
    name: "Forest Infusion",
    icon: "🌿",
    inputs: { whisperingVine: 3, emberShard: 2 },
    experience: 15,
    description: "Blend nature's essence with ember energy",
    outputs: {
      common: [
        { item: 'driedVine', baseChance: 30 },
        { item: 'ashPowder', baseChance: 25 }
      ],
      uncommon: [
        { item: 'soulcord', baseChance: 20 },
        { item: 'livingWood', baseChance: 15 }
      ],
      rare: [
        { item: 'mysticEssence', baseChance: 8 },
        { item: 'spiritLens', baseChance: 5 }
      ],
      epic: [
        { item: 'lifeSeed', baseChance: 4 }
      ],
      legendary: [
        { item: 'worldSeed', baseChance: 2 }
      ]
    }
  }
};

// Advanced Recipes
export const ADVANCED_RECIPES = {
  advancedRestorationKit: {
    name: "Advanced Restoration Kit",
    icon: "🛠️",
    inputs: { restorationHammer: 1, ironShard: 3, mysticEssence: 1 },
    experience: 50,
    description: "Combine tools and materials for advanced construction",
    output: 'advancedRestorationKit'
  },
  enchantedLens: {
    name: "Enchanted Lens",
    icon: "🔍",
    inputs: { spiritLens: 1, fireglass: 2, emberCrystal: 2 },
    experience: 45,
    description: "Merge optics with magical energy",
    output: 'enchantedLens'
  },
  buildersFocus: {
    name: "Builder's Focus",
    icon: "🌿",
    inputs: { livingWood: 2, soulcord: 3, mysticEssence: 1 },
    experience: 40,
    description: "Enhance natural building capabilities",
    output: 'buildersFocus'
  },
  voidEngine: {
    name: "Void Engine",
    icon: "⚫",
    inputs: { voidCrystal: 1, voidMetal: 2, shadowEssence: 3, ancientRelic: 1 },
    experience: 80,
    description: "Harness the power of the void for construction",
    output: 'voidEngine'
  },
  magicAmplifier: {
    name: "Magic Amplifier",
    icon: "🔆",
    inputs: { phoenixFeather: 1, spiritLens: 1, emberCrystal: 3, mysticEssence: 2 },
    experience: 70,
    description: "Amplify magical energies across vast areas",
    output: 'magicAmplifier'
  },
  terraformingDevice: {
    name: "Terraforming Device",
    icon: "🌍",
    inputs: { creatorsHammer: 1, worldSeed: 1, voidHeart: 1, masterworkGear: 2 },
    experience: 150,
    description: "Reshape the very fabric of reality",
    output: 'terraformingDevice'
  }
};

