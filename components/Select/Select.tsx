
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
  className?: string;
  customStyles?: StylesConfig
};

function SelectComponent({ options, onChange, placeholder, defaultValue, value, className, customStyles }: ISelectProps) {
  return (
    <Select 
      options={options}
      className={className}
      classNamePrefix={className}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      styles={customStyles}
    />
  );
}

export default SelectComponent;
