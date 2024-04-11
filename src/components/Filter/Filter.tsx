import styles from "./Filter.module.css";
import CheckboxComponent from "../Checkbox/Checkbox.tsx";

interface OptionType {
  value: string;
  title: string;
}

interface FilterProps {
  renderValue?: string;
  subtitle: string;
  options: OptionType[];
}

const Filter = ({ renderValue, subtitle, options }: FilterProps) => {
  return (
    <div className={styles.filter}>
      {renderValue?.length ? (
        <div className={styles.filter__aboveContainer}>
          <h4 className={styles.filter__title}>{renderValue}</h4>
        </div>
      ) : null}
      <div className={styles.filter__belowContainer}>
        <p className={styles.filter__subtitle}>{subtitle}</p>
        {options.map(({ value, title }) => (
          <CheckboxComponent key={value} value={value} name={title} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
