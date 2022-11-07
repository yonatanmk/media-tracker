import classnames from "classnames";
import styles from "./Row.module.scss";
import Cell from '../Cell'
import type { ITableColumn } from '../../../interfaces'

type IRowProps = {
  className?: string;
  row: any;
  columns: ITableColumn<any>[];
  isHeader?: boolean;
};

function Row({ row, columns, className, isHeader }: IRowProps) {
  return (
    <tr className={classnames(styles.Row, className, {[styles.row__header] : isHeader})}>
      {columns.map(
        (col, index) => <Cell 
          key={index} 
          fieldName={col.field}
          row={row}
          column={col}
          component={col.component}
          isHeader={isHeader}
        />
      )}
    </tr>
  );
}

export default Row;
