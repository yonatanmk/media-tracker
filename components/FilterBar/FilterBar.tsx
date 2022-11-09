import styles from "./FilterBar.module.scss";
import { useContext } from 'react';
import { FilterContext } from '../../contexts';
import Multiselect from "../Multiselect";
import Select from "../Select";
import { capitalize } from "../../utils";
import { durationTypeOptions } from "../../utils/media";
import { BsSearch } from "react-icons/bs";
import { StylesConfig } from 'react-select';

const FilterBar = () => {
  const { 
    nameSearch,
    setNameSearch,
    selectFilters,
    durationFilterNumber,
    setDurationFilterNumber,
    durationFilterType,
    setDurationFilterType
  } = useContext(FilterContext);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setNameSearch(e.currentTarget.value);
  }

  const handleDurationNumChange = (e) => setDurationFilterNumber(e.target.value);

  const handleDurationTypeChange = (option) => setDurationFilterType(option.value);

  const selectedDurationTypeOption = durationTypeOptions.find(opt => opt.value === durationFilterType);

  const durationSelectStyles: StylesConfig<any, true> = {
    control: (styles: any) => ({ ...styles, width: '6.25rem' }),
    option: (styles: any) => ({ ...styles, color: 'black' }),
  };

  const typeSelectStyles: StylesConfig<any, true> = {
    option: (styles: any) => ({ ...styles, color: 'black' }),
  };

  return (
    <div className={styles.FilterBar}>
      <div className={styles.FilterBar__filters}>
        <div className={styles.FilterBar__filters__row}>
          <div className={styles.FilterBar__search}>
            <input id="people-search" type="text" value={nameSearch} onChange={handleSearch} placeholder="Search Name" />
            <BsSearch />
          </div>
        </div>
        <div className={styles.FilterBar__filters__row}>
          <div className={styles.FilterBar__filters__row__filter}>
            <div className={styles.FilterBar__durationSelect}>
              <label htmlFor="duration-number">Duration</label>
              <Select 
                className={styles.FilterBar__durationSelect__Select} 
                customStyles={durationSelectStyles}
                options={durationTypeOptions} 
                onChange={handleDurationTypeChange} 
                value={selectedDurationTypeOption}
              />
              <input id="duration-number" type="number" value={durationFilterNumber} onChange={handleDurationNumChange} placeholder="Name" />
            </div>
          </div> 
          {selectFilters.map(filter => (
          <div className={styles.FilterBar__filters__row__filter}>
            <Multiselect 
              key={filter.key}
              customStyles={typeSelectStyles}
              options={filter.options.map(opt => ({label: capitalize(opt.toString()), value: opt.toString()}))} 
              placeholder={filter.placeholder} 
              onChange={filter.updateFilterValues}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
