import React, { ReactElement, ReactChild } from "react";
import styled from "styled-components";
import classnames from "classnames";

import theme, { colors } from "../../../theme/colors";

import styles from "./Box.module.scss";

interface Style {
  borderColor: string;
  borderRadius: number;
  borderWidth: number;
}

const BoxContainer = styled.div<Style>`
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius}px;
  border-width: ${(props) => props.borderWidth}px;
`;

interface BoxProps {
  className?: string;
  hasBorder?: boolean;
  handler?: ReactElement;
  children?: ReactChild[] | ReactChild;
  isExpandable?: boolean;
  hasPadding?: boolean;
}

const Box = ({
  className,
  hasBorder = true,
  handler,
  children,
  isExpandable = false,
  hasPadding = false,

}: BoxProps): ReactElement => {
  return (
    <>
      <BoxContainer
        borderRadius={theme.borderRadii.m}
        borderColor={colors.orange}
        className={classnames(styles.boxContainer, className, hasPadding ? styles.hasPadding : "")}
        borderWidth={hasBorder ? 2 : 0}
      >
        {handler}
        {!isExpandable && children}
      </BoxContainer>
    </>
  );
};

export default Box;
