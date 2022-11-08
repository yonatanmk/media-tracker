
import Select, { StylesConfig } from 'react-select';

type ISelectProps = {
  placeholder?: string;
  // options: { label: string; value: string }[];
  options: any[];
  onChange: (selected: any) => void;
  defaultValue?: {
    label: string;
    value: string;
  };
  value?: {
    label: string;
    value: string;
  };
};

function SelectComponent({ options, onChange, placeholder, defaultValue, value }: ISelectProps) {
  return (
    <Select 
      options={options}
      // className={styles.Multiselect}
      // classNamePrefix={styles.Multiselect}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SelectComponent;
