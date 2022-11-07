import classnames from "classnames";
import styles from "./Cell.module.scss";
import type { ITableCellComponent, ITableColumn } from '../../../interfaces';

type ICellProps = {
  fieldName?: string;
  column: ITableColumn<any>;
  className?: string;
  isHeader?: boolean;
  component?: React.ComponentType<any>;
  row: any;
};
function Cell({ fieldName, row, column, className: customClass, component, isHeader = false }: ICellProps) {
  const field = row[fieldName]
  const TableCell = isHeader ? 'th' : 'td';
  const className = classnames(styles.cell, customClass, { [styles.cell__header]: isHeader });
  let innerComponent;

  if (component) {
    if (field) {
      const Component = component;
      innerComponent = <Component {...(field as ITableCellComponent).props as {[key: string]: any}}></Component>;
    } else {
      innerComponent = null;
    }
  } else {
    const text = column.formatFunction ? column.formatFunction(row) : field as  string | number;
    innerComponent = <p>{text}</p>;
  }
  return (
    <TableCell className={className}>
      {innerComponent}
    </TableCell>
  );
}

export default Cell;
