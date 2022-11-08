// export interface ITableHeaderRow extends IPerson {
//   sortPredicate?: string;
//   sortOrder?: ISortOrder;
// }

// export interface ITableRow extends IPerson {
//   sortPredicate?: string;
//   sortOrder?: ISortOrder;
// }

export type ISortOrder = 'asc' | 'desc';

export interface ITableColumn<T> {
  name: string;
  index: number;
  // field: keyof T;
  field: string;
  component?: React.ComponentType<any>;
  sortByFunction?: (row: any) => any;
  formatFunction?: (value: T) => number | string;
}

export interface ITableCellComponent {
  props: {
    [key: string]: any;
  }
}

export interface IFilter {
  type: 'SEARCH' | 'SELECT' | 'CUSTOM';
  field?: string;
  value: string | string[];
  filterMethod?: (row: any) => boolean;
}

export interface IMedia {
  _id: number;
  name: string;
  startTime?: Date;
  endTime?: Date | null;
  nodes: {
    startTime?: Date;
    endTime?: Date | null;
  }[];
  type: string,
}

export interface ISelectFilter {
  key: number;
  placeholder: string;
  options: (string | number)[];
  updateFilterValues: React.Dispatch<React.SetStateAction<(string | number)[]>>;
}
