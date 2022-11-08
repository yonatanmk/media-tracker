// import styles from "./Multiselect.module.scss";
import Select, { StylesConfig } from 'react-select';

type IMultiselectProps = {
  placeholder?: string;
  options: { label: string; value: string }[];
  onChange: (selected: any) => void;
};
function Multiselect({ options, onChange, placeholder }: IMultiselectProps) {
  return (
    <Select 
      isMulti
      options={options}
      // className={styles.Multiselect}
      // classNamePrefix={styles.Multiselect}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Multiselect;
