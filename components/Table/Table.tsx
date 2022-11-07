import { useState } from 'react';
import classnames from 'classnames';
import orderBy from 'lodash/orderBy';
import styles from "./Table.module.scss";
import Row from './Row'
import type { ITableColumn, ISortOrder, IFilter } from '../../interfaces'
import HeaderCell from './HeaderCell';
import { SORT_ORDERS, filterRows } from './util';
import { TableSortContext } from './contexts';

interface ITableProps<T> {
  className?: string;
  // rows: T[];
  rows: any[];
  columns: ITableColumn<T>[];
  defaultSortPredicate: string;
  backupSortPredicate: string;
  filters?: IFilter[];
  id: string | number;
};

function Table<T extends object>({ className, rows, columns, defaultSortPredicate, backupSortPredicate, filters }: ITableProps<T>) {
  const [sortPredicate, setSortPredicate] = useState(defaultSortPredicate);
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.ASC as ISortOrder);
  const sortedColumns = [...columns].sort((a, b) => a.index > b.index ? 1 : -1);
  const headerColumns = sortedColumns.map(col => ({
    ...col,
    component: HeaderCell,
  }));

  const filteredRows = filters && filters.length > 0 ? filterRows(rows, filters)  : rows;

  const sortByColumn = columns.find(col => col.field === sortPredicate) as ITableColumn<T>;
  const sortByFunction = sortByColumn.sortByFunction || sortPredicate; // default to field value if there's no sort by function
  const sortedRows = orderBy(filteredRows, [sortByFunction, defaultSortPredicate || backupSortPredicate], [sortOrder, sortOrder]);

  const headerRow = columns.reduce((agg: Partial<any>, col) => {
    return {
      ...agg,
      [col.field]: {
        props: {
          name: col.name,
          field: col.field,
          sortPredicate,
          sortOrder,
        }
      },
    }
  }, {
    sortPredicate,
    sortOrder,
  } as Partial<any>) as any;

  return (
    <table className={classnames(styles.table, className)}>
      <thead>
        <TableSortContext.Provider value={{ sortPredicate, setSortPredicate, sortOrder, setSortOrder }}>
          <Row row={headerRow} columns={headerColumns} isHeader/>
        </TableSortContext.Provider>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => <Row key={index} row={row} columns={sortedColumns} />)}
      </tbody>
    </table>
  );
}

export default Table;