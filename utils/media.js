export const getDurations = (media) => {
  return media.endTime - media.startTime;
};

export const getDurationDays = (media) => {
  const duration = getDurations(media);
  return Math.ceil(duration / (1000 * 60 * 60 * 24));
};

export const getDateString = (date) => {
  const day = date.getDate() + "";
  const month = date.getMonth() + 1 + "";
  const year = date.getFullYear() + "";

  return `${month}/${day}/${year}`;
};
