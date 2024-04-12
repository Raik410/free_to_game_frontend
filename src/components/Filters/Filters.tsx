import styles from "./Filters.module.css";
import Filter from "../Filter/Filter.tsx";

const optionsPlatformSelect = [
  {
    value: "pc",
    title: "pc",
  },
  {
    value: "browser",
    title: "browser",
  },
];

const optionsCategorySelect = [
  {
    value: "shooter",
    title: "shooter",
  },
  {
    value: "pvp",
    title: "pvp",
  },
];

const Filters = () => {
  return (
    <section className={styles.filters}>
      <Filter
        renderValue="Sorted By:"
        subtitle="Platform"
        options={optionsPlatformSelect}
      />
      <Filter
        renderValue="Filter Type:"
        subtitle="Genre"
        options={optionsCategorySelect}
      />
      {/*<Filter subtitle="Graphics" select={false} />*/}
      {/*<Filter subtitle="Platform" select={false} />*/}
      {/*<Filter subtitle="Combat" select={false} />*/}
      {/*<Filter subtitle="Gameplay" select={false} />*/}
      {/*<Filter subtitle="Setting" select={false} />*/}
    </section>
  );
};

export default Filters;
