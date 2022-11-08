import styles from "./FilterBar.module.scss";
import { useContext } from 'react';
import { FilterContext } from '../../contexts';

const FilterBar = () => {
  const { nameSearch, setNameSearch } = useContext(FilterContext);

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
      </div>
    </div>
  );
};

export default FilterBar;
