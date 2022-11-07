import styles from "./SidePanel.module.scss";
import Table from "../Table";
import type { ITableColumn, IMedia } from '../../interfaces'
import { getDateString, getDurationDays } from "../../utils/media";
import { capitalize } from "../../utils";

export const columns: ITableColumn<IMedia>[] = [
  {
    name: 'Name',
    index: 1,
    field: 'name',
  },
  {
    name: 'Type',
    index: 2,
    field: 'type',
    formatFunction: (media: IMedia): string => capitalize(media.type),
  },
  {
    name: 'Start Date',
    index: 3,
    field: 'startTime',
    formatFunction:(media: IMedia): string => getDateString(media.startTime),
  },
  {
    name: 'End Date',
    index: 4,
    field: 'endTime',
    formatFunction:(media: IMedia): string => getDateString(media.endTime),
  },
  {
    name: 'Duration',
    index: 5,
    field: 'duration', // doesn't exist on media
    formatFunction:(media: IMedia): number => getDurationDays(media),
  },
];

export type ISidePanelProps = {
  media: IMedia[];
};


const SidePanel = ({ media }: ISidePanelProps) => {
  return (
    <div className={styles.sidePanel}>

      <Table 
        id="_id"
        rows={media} 
        columns={columns} 
        defaultSortPredicate="name" 
        backupSortPredicate="name"
      />
    </div>
  );
};

export default SidePanel;
