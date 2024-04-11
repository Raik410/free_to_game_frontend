import React from "react";
import { Checkbox } from "antd";
// import type { CheckboxProps } from "antd";
import styles from "./Checkbox.module.css";
import { useAppDispatch } from "../../app/hooks.ts";
import { setPlatformsFilter } from "../../features/games/gamesSlice.ts";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";

interface CheckboxComponentProps {
  name: string;
  value: string;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  name,
  value,
}) => {
  const dispatch = useAppDispatch();

  const handlePlatformChange = (e: CheckboxChangeEvent) => {
    const {checked} = e.target;
    dispatch(setPlatformsFilter(value));
  };

  return (
    <Checkbox value={value} onChange={handlePlatformChange}>
      <p className={styles.text}>{name}</p>
    </Checkbox>
  );
};

export default CheckboxComponent;
