import React, { MouseEvent, ReactElement, useState } from "react";
import { Range, Direction, getTrackBackground } from "react-range";

import { colors } from "../../../theme/colors";

import styles from "./Light.module.scss";

const STEP = 1;
const MIN = 0;
const MAX = 100;

const Light = (): ReactElement => {
  const [value, setValue] = useState<Array<number>>([10]);

  function handleChange(numbers: Array<number>): void {
    setValue(numbers);
  }

  function handleClick(event: MouseEvent<HTMLDivElement>): void {
    event.stopPropagation();
    console.debug("event", event);
  }
  return (
    <div onClick={(event) => handleClick(event)} className={styles.oneLight}>
      <Range
        direction={Direction.Up}
        values={value}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => handleChange(values)}
        renderMark={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: index % 2 ? "3px" : "4px",
              width: index % 2 ? "11px" : "16px",
              backgroundColor: "transparent",
            }}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              flexGrow: 1,
              width: "80px",
              display: "flex",
              height: "600px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                width: "250px",
                height: "100%",
                borderRadius: "20px",
                background: getTrackBackground({
                  values: value,
                  colors: [colors.orange, colors.mainAppColor],
                  min: MIN,
                  max: MAX,
                  direction: Direction.Up,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              display: "none",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default Light;