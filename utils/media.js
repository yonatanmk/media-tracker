export const mediaTypes = Object.freeze({
  videogame: "videogame",
  book: "book",
  tv: "tv",
});

export const getDuration = (media) => {
  return media.endTime - media.startTime + 1000 * 60 * 60 * 24;
};

export const getDurationDays = (media) => {
  const duration = getDuration(media);
  if (Math.ceil(duration / (1000 * 60 * 60 * 24) === 2)) {
    console.log(duration);
  }
  return Math.ceil(duration / (1000 * 60 * 60 * 24));
};

export const getDateString = (date) => {
  const day = date.getDate() + "";
  const month = date.getMonth() + 1 + "";
  const year = date.getFullYear() + "";

  return `${month}/${day}/${year}`;
};

export const datesEqual = (a, b) =>
  Math.ceil(a.getTime() / 1000) === Math.ceil(b.getTime() / 1000);
