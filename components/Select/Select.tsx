
import Select, { StylesConfig } from 'react-select';

type ISelectProps = {
  placeholder?: string;
  // options: { label: string; value: string }[];
  options: any[];
  onChange: (selected: any) => void;
  defaultValue?: string;
};

function SelectComponent({ options, onChange, placeholder, defaultValue }: ISelectProps) {
  return (
    <Select 
      options={options}
      // className={styles.Multiselect}
      // classNamePrefix={styles.Multiselect}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SelectComponent;
