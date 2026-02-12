export interface PictureIdea {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  color: string;
  description: string;
}

export const pictureIdeas: PictureIdea[] = [
  {
    id: 1,
    title: 'Valiri Praying',
    category: 'Nature & Outdoors',
    imageSrc: '/roulette-photos/photo1.jpg',
    color: 'var(--pixel-mint)',
    description: 'Explore nature together with a hike or picnic!'
  },
  {
    id: 2,
    title: 'Pat nasa Airport',
    category: 'Home & Comfort',
    imageSrc: '/roulette-photos/photo2.jpg',
    color: 'var(--pixel-peach)',
    description: 'Snuggle up for a movie night or game session!'
  },
  {
    id: 3,
    title: 'Pat Pogi',
    category: 'Dining & Romance',
    imageSrc: '/roulette-photos/photo3.jpg',
    color: 'var(--pixel-coral)',
    description: 'Enjoy a candlelit dinner together!'
  },
  {
    id: 4,
    title: 'Pat Rakista',
    category: 'Games & Entertainment',
    imageSrc: '/roulette-photos/photo4.jpg',
    color: 'var(--pixel-pink)',
    description: 'Play games, go bowling, or have fun together!'
  },
  {
    id: 5,
    title: 'eirelav',
    category: 'Arts & Culture',
    imageSrc: '/roulette-photos/photo5.jpg',
    color: 'var(--pixel-lavender)',
    description: 'Visit a museum, gallery, or theater!'
  },
  {
    id: 6,
    title: 'yang piece',
    category: 'Adventure & Surprise',
    imageSrc: '/roulette-photos/photo6.jpg',
    color: 'var(--pixel-rose)',
    description: 'Let spontaneity guide your adventure!'
  },
];
