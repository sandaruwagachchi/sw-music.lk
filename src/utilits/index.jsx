export const formatSecondsToMinute = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingseconds = Math.floor(seconds % 60);
    const formatedMinutes = String(minutes).padStart(2, '0');
    const formatedSeconds = String(remainingseconds).padStart(2, '0');
    return `${formatedMinutes}:${formatedSeconds}`
};

export const isExist = (songs, song) => {
    if (!song?.url) return false;
    return songs.some((item) => item.url === song.url);
  };
  