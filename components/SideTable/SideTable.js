import styles from "./SideTable.module.scss";
import { getDateString } from "../../utils/media";
import { capitalize } from "../../utils";

const SideTable = ({ sortedMedia }) => {
  return (
    <table className={styles.sideTable}>
      <tbody>
        {sortedMedia.map((item) => (
          <tr key={item._id}>
            <td style={{ width: "12rem" }}>{item.name}</td>
            <td>{capitalize(item.type)}</td>
            <td>{getDateString(item.startTime)}</td>
            <td>{item.inProgress ? "Today" : getDateString(item.endTime)}</td>
            <td>{item.duration + " days"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SideTable;
