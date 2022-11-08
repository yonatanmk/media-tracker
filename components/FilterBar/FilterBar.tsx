import styles from "./FilterBar.module.scss";
import { useContext } from 'react';
import { FilterContext } from '../../contexts';
import Multiselect from "../Multiselect";
import { capitalize } from "../../utils";

const FilterBar = () => {
  const { nameSearch, setNameSearch, selectFilters } = useContext(FilterContext);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setNameSearch(e.currentTarget.value);
  }

  return (
    <div className={styles.FilterBar}>
      <h3>Filters</h3>
      <div className={styles.FilterBar__filters}>
        <div className={styles.FilterBar__search}>
          <label htmlFor="people-search">Search</label>
          <input id="people-search" type="text" value={nameSearch} onChange={handleSearch} placeholder="Name" />
        </div>
        {selectFilters.map(filter => <Multiselect key={filter.key} options={filter.options.map(opt => ({label: capitalize(opt.toString()), value: opt.toString()}))} placeholder={filter.placeholder} onChange={filter.updateFilterValues}/>)}
      </div>
    </div>
  );
};

export default FilterBar;
