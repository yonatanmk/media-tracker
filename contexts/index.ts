
import React, { createContext } from 'react';
import type { IFilter, ISelectFilter } from '../interfaces';

export const FilterContext = createContext({
  nameSearch: '',
  setNameSearch: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  filters: [] as IFilter[],
  selectFilters: [] as ISelectFilter[],
});
