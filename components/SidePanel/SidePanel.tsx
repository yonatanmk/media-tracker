import styles from "./SidePanel.module.scss";
import SideTable from "../../components/SideTable";
import Table from "../Table";
import type { ITableColumn, IMedia } from '../../interfaces'
import { getDateString } from "../../utils/media";
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
    formatFunction: (type): string => capitalize(type),
  },
  // {
  //   name: 'Duration',
  //   index: 4,
  //   field: 'duration',
  //   formatFunction: (milliseconds: number): string => {
  //     const minutes = Math.floor(milliseconds / 60000);
  //     const seconds = ((milliseconds % 60000) / 1000)
  //     const roundedSeconds = seconds.toFixed(0);
  //     return minutes + ":" + (seconds < 9.5 ? '0' : '') + roundedSeconds;
  //   }
  // },


  // TODO CALL FORMAT FUNCTION ON ROW INSTEAD OF ON FIELD TO CALCULATEW MEDIA DURATION
  {
    name: 'Start Date',
    index: 3,
    field: 'startTime',
    formatFunction: (date): string => getDateString(date),
  },
  {
    name: 'End Date',
    index: 4,
    field: 'endTime',
    formatFunction: (date): string => getDateString(date),
  },
  // {
  //   name: 'Liked',
  //   index: 5,
  //   field: 'liked',
  //   component: CheckmarkCell,
  //   sortByFunction: booleanSortFunctionGenerator('liked'),
  // },
];

export type ISidePanelProps = {
  media: IMedia[];
};


const SidePanel = ({ media }: ISidePanelProps) => {
  // return <p>hello</p>
  return (
    <div className={styles.sidePanel}>
      {/* <SideTable sortedMedia={media} /> */}
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
