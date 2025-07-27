export const GAME_CONFIG = {
  baseRates: {
    emberShard: 0.8,
    whisperingVine: 0.6,
    dustleaf: 0.7,
    ancientAlloy: 0.2
  },
  rarityChances: {
    common: 65,
    uncommon: 20,
    rare: 10,
    epic: 4,
    legendary: 1
  },
  timers: {
    resourceTick: 1000,
    moodDecay: 150000,
    petCooldown: 60000
  }
};

export const RARITY_ORDER = ['legendary', 'epic', 'rare', 'uncommon', 'common'];

export const RESOURCE_ICONS: Record<string, string> = {
  emberShard: '🔥',
  whisperingVine: '🌿',
  dustleaf: '🍃',
  ancientAlloy: '⚡'
};