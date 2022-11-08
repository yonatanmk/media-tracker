import styles from "./FilterBar.module.scss";
import { useContext } from 'react';
import { FilterContext } from '../../contexts';
import Multiselect from "../Multiselect";
import Select from "../Select";
import { capitalize } from "../../utils";
import { durationTypeOptions, DURATION_TYPES } from "../../utils/media";

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

  return (
    <div className={styles.FilterBar}>
      <h3>Filters</h3>
      <div className={styles.FilterBar__filters}>
        <div className={styles.FilterBar__search}>
          <label htmlFor="people-search">Search</label>
          <input id="people-search" type="text" value={nameSearch} onChange={handleSearch} placeholder="Name" />
        </div>
        <input id="duration-number" type="number" value={durationFilterNumber} onChange={handleDurationNumChange} placeholder="Name" />
        <Select options={durationTypeOptions} onChange={handleDurationTypeChange} defaultValue={durationFilterType}/>
        {selectFilters.map(filter => <Multiselect key={filter.key} options={filter.options.map(opt => ({label: capitalize(opt.toString()), value: opt.toString()}))} placeholder={filter.placeholder} onChange={filter.updateFilterValues}/>)}
      </div>
    </div>
  );
};

export default FilterBar;
