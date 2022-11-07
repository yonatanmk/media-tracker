import styles from "./SidePanel.module.scss";
import SideTable from "../../components/SideTable";
import { getDateString } from "../../utils/media";
import { capitalize } from "../../utils";

const SidePanel = ({ sortedMedia }) => {
  return (
    <div className={styles.sidePanel}>
      <SideTable sortedMedia={sortedMedia} />
    </div>
  );
};

export default SidePanel;
