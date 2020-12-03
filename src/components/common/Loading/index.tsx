import React, { ReactElement } from "react";
import Loader from "react-loader-spinner";

import { colors } from "../../../theme/colors";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loading.module.scss";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps): ReactElement | null =>
  isLoading ? (
    <div className={styles.loadingContainer}>
      <Loader
        type="Oval"
        color={colors.orange}
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  ) : null;

export default Loading;
