import { genres, ncsSongs, newRelease, party, Party, recommendedSongs } from './songs';

export const songsCategory = [
  {
    title: '- 🔥 Trending Now -',
    songs: recommendedSongs,
  },
  {
    title: '- 💝 Recommended for You -',
    songs: newRelease,
  },
  {
    title: '- 🎥 New Release -',
    songs: ncsSongs,
  },
  {
    title: '- 💃 Party / Dance -',
    songs: party,
  },
  {
    title: '- 🎧 Genres -',
    songs: genres,
  },
];
