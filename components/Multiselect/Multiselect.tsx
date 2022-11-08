// import styles from "./Multiselect.module.scss";
import Select, { StylesConfig } from 'react-select';

type IMultiselectProps = {
  placeholder?: string;
  // options: { label: string; value: string }[];
  options: any[];
  onChange: (selected: any) => void;
  defaultValue?: string;
};

function Multiselect({ options, onChange, placeholder, defaultValue }: IMultiselectProps) {
  return (
    <Select 
      isMulti
      options={options}
      // className={styles.Multiselect}
      // classNamePrefix={styles.Multiselect}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Multiselect;