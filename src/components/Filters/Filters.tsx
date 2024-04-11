import styles from "./Filters.module.css";
import Filter from "../Filter/Filter.tsx";

const platformSelect = ["pc", "browser"];
const Filters = () => {
  return (
    <section className={styles.filters}>
      <Filter
        title="Sorted By:"
        subtitle="Platform"
        select={true}
        texts={platformSelect}
      />
      {/*<Filter title="Filter Type:" subtitle="Genre" select={true} />*/}
      {/*<Filter subtitle="Graphics" select={false} />*/}
      {/*<Filter subtitle="Platform" select={false} />*/}
      {/*<Filter subtitle="Combat" select={false} />*/}
      {/*<Filter subtitle="Gameplay" select={false} />*/}
      {/*<Filter subtitle="Setting" select={false} />*/}
    </section>
  );
};

export default Filters;
