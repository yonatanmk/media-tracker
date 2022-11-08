// import { IFilter } from "../interfaces";
import includes from "lodash/includes";
import { FILTER_TYPES } from "../components/Table/util";

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

// COPIED FROM components/Table/util.ts
// export const filterMedia = (rows: any, filters: IFilter[]) => {
export const filterMedia = (rows, filters) => {
  // return rows.filter((row: any) => {
  return rows.filter((row) => {
    // return filters.every((filter: IFilter) => {
    return filters.every((filter) => {
      if (
        filter.type === FILTER_TYPES.SEARCH &&
        typeof filter.value === "string"
      ) {
        return searchMatch(row[filter.field], filter.value.toLowerCase());
      } else if (
        filter.type === FILTER_TYPES.SELECT &&
        Array.isArray(filter.value)
      ) {
        return (
          filter.value.length === 0 || includes(filter.value, row[filter.field])
        ); // filter.value array has the value of row[filter.field]
      } else if (filter.type === FILTER_TYPES.CUSTOM && filter.filterMethod) {
        return filter.filterMethod(row);
      } else {
        return false;
      }
    });
  });
};

// COPIED FROM components/Table/util.ts
const searchMatch = (value, search) => {
  return !!value && value.toLowerCase().indexOf(search) > -1;
};

// Get field values from media array to use as select options
export const getFieldOptions = (media, fields) =>
  media.reduce((agg, mediaItem) => {
    const options = { ...agg };
    for (let i = 0; i < fields.length; i++) {
      const fieldName = fields[i];
      if (Array.isArray(agg[fieldName])) {
        options[fieldName] = !agg[fieldName].includes(mediaItem[fieldName])
          ? [...agg[fieldName], mediaItem[fieldName]]
          : agg[fieldName];
      } else {
        options[fieldName] = [];
      }
    }
    return options;
  }, {});

export const DURATION_TYPES = Object.freeze({
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  EQUAL: "EQUAL",
  NONE: "NONE",
});

export const durationTypeOptionsNone = {
  label: "None",
  value: DURATION_TYPES.NONE,
};

export const durationTypeOptions = [
  durationTypeOptionsNone,
  {
    label: ">",
    value: DURATION_TYPES.GREATER_THAN,
  },
  {
    label: ">=",
    value: DURATION_TYPES.GREATER_THAN_OR_EQUAL,
  },
  {
    label: "<",
    value: DURATION_TYPES.LESS_THAN,
  },
  {
    label: "<=",
    value: DURATION_TYPES.LESS_THAN_OR_EQUAL,
  },
  {
    label: "=",
    value: DURATION_TYPES.EQUAL,
  },
];
