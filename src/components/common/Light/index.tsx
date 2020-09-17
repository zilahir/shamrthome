import React, { ReactElement, useState } from "react";
import { Range, Direction, getTrackBackground } from "react-range";

import styles from "./Light.module.scss";

const STEP = 10;
const MIN = 0;
const MAX = 100;

const Light = (): ReactElement => {
  const [value, setValue] = useState<Array<number>>([10]);

  function handleChange(numbers: Array<number>): void {
    setValue(numbers);
  }
  return (
    <div className={styles.oneLight}>
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
              backgroundColor:
                index * STEP > MAX - value[0] ? "#548BF4" : "#ccc",
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
              width: "36px",
              display: "flex",
              height: "600px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                width: "5px",
                height: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: value,
                  colors: ["#548BF4", "#ccc"],
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
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
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
