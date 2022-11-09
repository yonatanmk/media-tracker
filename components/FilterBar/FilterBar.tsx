import styles from "./FilterBar.module.scss";
import { useContext } from 'react';
import { FilterContext } from '../../contexts';
import Multiselect from "../Multiselect";
import Select from "../Select";
import { capitalize } from "../../utils";
import { durationTypeOptions } from "../../utils/media";
import { BsSearch } from "react-icons/bs";

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

  return (
    <div className={styles.FilterBar}>
      {/* <h3>Filters</h3> */}
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
            <Select className={styles.FilterBar__durationSelect__Select} options={durationTypeOptions} onChange={handleDurationTypeChange} value={selectedDurationTypeOption}/>
            <input id="duration-number" type="number" value={durationFilterNumber} onChange={handleDurationNumChange} placeholder="Name" />
          </div>
        </div> 
        <div className={styles.FilterBar__filters__row__filter}>
          {/* <Select options={durationTypeOptions} onChange={handleDurationTypeChange} value={selectedDurationTypeOption}/> */}
        </div> 
        <div className={styles.FilterBar__filters__row__filter}>
          {/* <Select options={durationTypeOptions} onChange={handleDurationTypeChange} value={selectedDurationTypeOption}/> */}
        </div> 
        <div className={styles.FilterBar__filters__row__filter}>
          {/* <Select options={durationTypeOptions} onChange={handleDurationTypeChange} value={selectedDurationTypeOption}/> */}
        </div> 
          {/* <div className={styles.FilterBar__selects}>
            <Select options={durationTypeOptions} onChange={handleDurationTypeChange} value={selectedDurationTypeOption}/>
            <input id="duration-number" type="number" value={durationFilterNumber} onChange={handleDurationNumChange} placeholder="Name" />
          </div>
          {selectFilters.map(filter => <Multiselect key={filter.key} options={filter.options.map(opt => ({label: capitalize(opt.toString()), value: opt.toString()}))} placeholder={filter.placeholder} onChange={filter.updateFilterValues}/>)} */}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
