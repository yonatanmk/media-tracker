// import styles from "./Multiselect.module.scss";
import Select, { StylesConfig } from 'react-select';

type IMultiselectProps = {
  placeholder?: string;
  // options: { label: string; value: string }[];
  options: any[];
  onChange: (selected: any) => void;
  defaultValue?: string;
  customStyles?: StylesConfig;
};

function Multiselect({ options, onChange, placeholder, defaultValue, customStyles }: IMultiselectProps) {
  return (
    <Select 
      isMulti
      options={options}
      // className={styles.Multiselect}
      // classNamePrefix={styles.Multiselect}
      styles={customStyles}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Multiselect;
