import React, { MouseEvent, ReactElement, useState } from "react";
import { Range, Direction, getTrackBackground } from "react-range";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import styled from "styled-components";

import { colors } from "../../../theme/colors";

import styles from "./Light.module.scss";

interface BulbStyle {
  opacity: number;
}

const Bulb = styled.span<BulbStyle>`
  svg {
    opacity: ${(props) => props.opacity};
  }
`;

const STEP = 1;
const MIN = 0;
const MAX = 100;

interface LightProps {
  lampTitle: string;
}

const Light = ({ lampTitle }: LightProps): ReactElement => {
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
      <Bulb opacity={value[0] / 100} className={styles.bulb}>
        <EmojiObjectsIcon fontSize="large" htmlColor="#ffffff" />
      </Bulb>
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
              width: "150px",
              display: "flex",
              height: "600px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                width: "250px",
                height: "100%",
                borderRadius: "40px",
                background: getTrackBackground({
                  values: value,
                  colors: [colors.orange, colors.mainAppColor],
                  min: MIN,
                  max: MAX,
                  direction: Direction.Up,
                }),
                alignSelf: "center",
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: colors.orange,
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
      <h1>{lampTitle}</h1>
    </div>
  );
};

export default Light;
