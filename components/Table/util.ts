import includes from 'lodash/includes';
import type { IFilter } from '../../interfaces';

export const SORT_ORDERS = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
} as const);

export const FILTER_TYPES = Object.freeze({
  SEARCH: 'SEARCH',
  SELECT: 'SELECT',
} as const);

export const filterRows = (rows: any, filters: IFilter[]) => {
  return rows.filter((row: any) => {
    return filters.every((filter: IFilter) => {
      if (filter.type === FILTER_TYPES.SEARCH && typeof filter.value === 'string') {
        return searchMatch(row[filter.field], filter.value.toLowerCase())
      } else if (filter.type === FILTER_TYPES.SELECT && Array.isArray(filter.value)) {
        return filter.value.length === 0 || includes(filter.value, row[filter.field]) // filter.value array has the value of row[filter.field]
      } else {
        return false;
      }
    })
  })
};

const searchMatch = (value: string, search: string): boolean => {
  return !!value && value.toLowerCase().indexOf(search) > -1;
};
