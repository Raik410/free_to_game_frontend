import { Checkbox } from "antd";
import styles from "./Checkbox.module.css";
import { useAppDispatch } from "../../app/hooks.ts";
import { toogleFilter } from "../../features/games/gamesSlice.ts";
// import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import { ChangeEvent, FC } from "react";

interface CheckboxComponentProps {
  name: string;
  value: string;
}

const CheckboxComponent: FC<CheckboxComponentProps> = ({ name, value }) => {
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(e.target);

    dispatch(
      toogleFilter({
        type: value === "pc" || value === "browser" ? "platforms" : "categorys",
        value,
      }),
    );
  };

  return (
    <Checkbox value={value} onChange={handleFilterChange}>
      <p className={styles.text}>{name}</p>
    </Checkbox>
  );
};

export default CheckboxComponent;
