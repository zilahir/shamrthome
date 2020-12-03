import React, { ReactElement } from "react";
import Loader from "react-loader-spinner";

import { colors } from "../../../theme/colors";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps): ReactElement | null =>
  isLoading ? (
    <Loader
      type="Rings"
      color={colors.orange}
      height={100}
      width={100}
      timeout={3000}
    />
  ) : null;

export default Loading;
