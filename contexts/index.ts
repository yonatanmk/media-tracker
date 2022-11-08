
import React, { createContext } from 'react';
import type { IFilter, ISelectFilter } from '../interfaces';
import { DURATION_TYPES } from "../utils/media";

export const FilterContext = createContext({
  nameSearch: '',
  setNameSearch: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  filters: [] as IFilter[],
  selectFilters: [] as ISelectFilter[],
  durationFilterNumber: 0,
  setDurationFilterNumber: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  durationFilterType: DURATION_TYPES.GREATER_THAN_OR_EQUAL,
  setDurationFilterType: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
});
