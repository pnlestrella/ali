export interface EmotionWord {
  text: string;
  size: 'primary' | 'secondary' | 'tertiary';
  color: string;
  animationDuration: number;
  animationDelay: number;
}

export const emotions: EmotionWord[] = [
  // Primary emotions (largest)
  { text: 'Loved', size: 'primary', color: '#FF6B9D', animationDuration: 10, animationDelay: 0 },
  { text: 'Happy', size: 'primary', color: '#FF6F61', animationDuration: 12, animationDelay: 1 },
  { text: 'Complete', size: 'primary', color: '#C77DFF', animationDuration: 11, animationDelay: 2 },
  { text: 'Cherished', size: 'primary', color: '#5D4E60', animationDuration: 13, animationDelay: 0.5 },
  
  // Secondary emotions (medium)
  { text: 'Joyful', size: 'secondary', color: '#FF6B9D', animationDuration: 14, animationDelay: 1.5 },
  { text: 'Safe', size: 'secondary', color: '#FF6F61', animationDuration: 9, animationDelay: 2.5 },
  { text: 'Excited', size: 'secondary', color: '#C77DFF', animationDuration: 15, animationDelay: 0.8 },
  { text: 'Inspired', size: 'secondary', color: '#5D4E60', animationDuration: 11, animationDelay: 1.8 },
  { text: 'Grateful', size: 'secondary', color: '#FF6B9D', animationDuration: 10, animationDelay: 2.2 },
  { text: 'Beautiful', size: 'secondary', color: '#FF6F61', animationDuration: 13, animationDelay: 0.3 },
  
  // Tertiary emotions (smaller)
  { text: 'Peaceful', size: 'tertiary', color: '#C77DFF', animationDuration: 12, animationDelay: 1.2 },
  { text: 'Strong', size: 'tertiary', color: '#5D4E60', animationDuration: 14, animationDelay: 2.8 },
  { text: 'Confident', size: 'tertiary', color: '#FF6B9D', animationDuration: 9, animationDelay: 0.6 },
  { text: 'Adored', size: 'tertiary', color: '#FF6F61', animationDuration: 11, animationDelay: 1.9 },
  { text: 'Lucky', size: 'tertiary', color: '#C77DFF', animationDuration: 13, animationDelay: 0.9 },
  { text: 'Warm', size: 'tertiary', color: '#5D4E60', animationDuration: 10, animationDelay: 2.4 },
  { text: 'Calm', size: 'tertiary', color: '#FF6B9D', animationDuration: 15, animationDelay: 1.1 },
  { text: 'Secure', size: 'tertiary', color: '#FF6F61', animationDuration: 12, animationDelay: 0.4 },
  { text: 'Special', size: 'tertiary', color: '#C77DFF', animationDuration: 14, animationDelay: 2.6 },
  { text: 'Valued', size: 'tertiary', color: '#5D4E60', animationDuration: 11, animationDelay: 1.4 },
];
