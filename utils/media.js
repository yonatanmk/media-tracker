const msPerDay = 1000 * 60 * 60 * 24;

export const mediaTypes = Object.freeze({
  videogame: "videogame",
  book: "book",
  tv: "TV",
  playthrough: "playthrough",
  podcast: "podcast",
});

const getMediaTimeDiff = (media) =>
  (media.endTime || new Date()) - (media.startTime || new Date());

const getDayDiff = (milliseconds) => milliseconds - (milliseconds % msPerDay);

const getDuration = (media) => {
  let timeDiff = media?.nodes && media?.nodes[0] ? 0 : getMediaTimeDiff(media);
  if (media?.nodes && media?.nodes[0]) {
    for (let i = 0; i < media.nodes.length; i++) {
      const msDiff = getMediaTimeDiff(media.nodes[i]);
      const dayDiff = getDayDiff(msDiff);
      timeDiff += dayDiff + msPerDay; // add one day
    }
    return timeDiff;
  } else {
    return getDayDiff(timeDiff) + msPerDay; // add one day
  }
};

export const getDurationDays = (media) => {
  const duration = getDuration(media);
  return Math.ceil(duration / (1000 * 60 * 60 * 24));
};

export const getDateString = (date) => {
  if (!date) {
    return "NULL";
  }
  const day = date.getDate() + "";
  const month = date.getMonth() + 1 + "";
  const year = date.getFullYear() + "";

  return `${month}/${day}/${year}`;
};

export const getMonthYear = (date) => {
  const month = date.getMonth() + 1 + "";
  const year = date.getFullYear() + "";

  return `${month}/${year}`;
};

export const datesEqual = (a, b) =>
  Math.ceil(a.getTime() / 1000) === Math.ceil(b.getTime() / 1000);

export const getMonths = (start, end) => {
  const timelineEndDate = new Date(end.getTime());
  timelineEndDate.setMonth(timelineEndDate.getMonth() + 1);
  const months = [];
  const startYear = start.getFullYear();
  const startMonth = start.getMonth() + 1;
  const endYear = timelineEndDate.getFullYear();
  const endMonth = timelineEndDate.getMonth() + 1;

  for (let year = startYear; year <= endYear; year++) {
    const yearStartMonth = year === startYear ? startMonth : 1;
    const yearEndMonth = year === endYear ? endMonth : 12;
    for (let month = yearStartMonth; month <= yearEndMonth; month++) {
      months.push(new Date(`${month}/01/${year}`));
    }
  }

  return months;
};

export const addHoursToDate = (date, hours) => {
  return new Date(new Date(date).setHours(date.getHours() + hours));
};
