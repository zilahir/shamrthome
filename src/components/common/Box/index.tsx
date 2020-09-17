import React, { ReactChild, ReactElement } from "react";
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
  children: ReactChild[] | ReactChild;
  className?: string;
  hasBorder?: boolean;
}

const Box = ({
  children,
  className,
  hasBorder = true,
}: BoxProps): ReactElement => (
  <BoxContainer
    borderRadius={theme.borderRadii.m}
    borderColor={colors.orange}
    className={classnames(styles.boxContainer, className)}
    borderWidth={hasBorder ? 2 : 0}
  >
    {children}
  </BoxContainer>
);

export default Box;
