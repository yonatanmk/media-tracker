import styles from "./SidePanel.module.scss";
import { useContext } from "react";
import Table from "../Table";
import FilterBar from "../FilterBar";
import type { ITableColumn, IMedia } from '../../interfaces'
import { getDateString, getDurationDays } from "../../utils/media";
import { capitalize } from "../../utils";
import { FilterContext } from '../../contexts';


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
    sortByFunction: (media: IMedia): string => media.type.toLowerCase(),
  },
  {
    name: 'Start',
    index: 3,
    field: 'startTime',
    formatFunction:(media: IMedia): string => getDateString(media.startTime || media.nodes[0]?.startTime),
  },
  {
    name: 'End',
    index: 4,
    field: 'endTime',
    formatFunction:(media: IMedia): string => getDateString(media.endTime  || media.nodes[0]?.endTime),
  },
  {
    name: 'Duration',
    index: 5,
    field: 'duration', // doesn't exist on media
    formatFunction:(media: IMedia): number => getDurationDays(media),
    sortByFunction: (media: IMedia): number => getDurationDays(media),
  },
];

export type ISidePanelProps = {
  media: IMedia[];
};


const SidePanel = ({ media }: ISidePanelProps) => {
  const { filters } = useContext(FilterContext);

  return (
    <div className={styles.sidePanel}>
      <FilterBar />
      <Table 
        id="_id"
        rows={media} 
        columns={columns} 
        defaultSortPredicate="name" 
        backupSortPredicate="name"
        filters={filters}
      />
    </div>
  );
};

export default SidePanel;
