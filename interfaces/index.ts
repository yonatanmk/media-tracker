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
  sortByFunction?: (row: IPerson) => any;
  formatFunction?: (value: any) => number | string;
}

export interface ITableCellComponent {
  props: {
    [key: string]: any;
  }
}

export interface IFilter {
  type: 'SEARCH' | 'SELECT',
  field: string,
  value: string | string[],
}

export interface IMedia {
  _id: number;
  name: string;
  startTime: Date,
  endTime: Date,
  type: string,
}