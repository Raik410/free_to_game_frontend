import styles from "./Filter.module.css";
import { FC } from "react";
import CheckboxComponent from "../Checkbox/Checkbox.tsx";

interface FilterProps {
  title?: string;
  subtitle: string;
  texts?: string[];
  select: boolean;
}
const Filter: FC<FilterProps> = ({ title, subtitle, select, texts }) => {
  return (
    <div className={styles.filter}>
      {select ? (
        <div className={styles.filter__aboveContainer}>
          <h4 className={styles.filter__title}>{title}</h4>
        </div>
      ) : null}
      <div className={styles.filter__belowContainer}>
        <p className={styles.filter__subtitle}>{subtitle}</p>
        {texts &&
          texts.map((text) => <CheckboxComponent key={text} name={text} />)}
      </div>
    </div>
  );
};

export default Filter;
