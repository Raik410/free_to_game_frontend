import React from "react";
import { Checkbox } from "antd";
// import type { CheckboxProps } from "antd";
import styles from "./Checkbox.module.css";
import { useAppDispatch } from "../../app/hooks.ts";
import {
  fetchGames,
  setPlatformFilter,
} from "../../features/games/gamesSlice.ts";

interface CheckboxComponentProps {
  name: string;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ name }) => {
  const dispatch = useAppDispatch();

  const handlePlatformChange = (platform: string) => {
    dispatch(setPlatformFilter(platform));
    void dispatch(fetchGames(platform));
  };

  return (
    <Checkbox
      onChange={(e) => {
        if (e.target.checked) handlePlatformChange(name);
      }}
    >
      <p className={styles.text}>{name}</p>
    </Checkbox>
  );
};

export default CheckboxComponent;
