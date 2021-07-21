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

export const getMonths = (start, end) => {
  const timelineEndDate = new Date(end.getTime());
  timelineEndDate.setMonth(timelineEndDate.getMonth() + 1);
  const months = [];
  const startYear = start.getFullYear();
  const startMonth = start.getMonth() + 1;
  const endYear = timelineEndDate.getFullYear();
  const endMonth = timelineEndDate.getMonth() + 1;
  // console.log({
  //   startYear,
  //   startMonth,
  //   endYear,
  //   endMonth,
  // });

  for (let year = startYear; year <= endYear; year++) {
    const yearStartMonth = year === startYear ? startMonth : 1;
    const yearEndMonth = year === endYear ? endMonth : 12;
    for (let month = yearStartMonth; month <= yearEndMonth; month++) {
      months.push(new Date(`${month}/01/${year}`));
    }
  }

  return months;
};
