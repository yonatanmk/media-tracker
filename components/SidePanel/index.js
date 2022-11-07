import styles from "./SidePanel.module.scss";
import { getDateString } from "../../utils/media";
import { capitalize } from "../../utils";

const SidePanel = ({ sortedMedia }) => {
  console.log(sortedMedia);
  return (
    <div className={styles.sidePanel}>
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
    </div>
  );
};

export default SidePanel;
