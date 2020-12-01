import React, { ReactElement } from "react";
import { ToastContainer } from "react-toastify";

export const Notification = (): ReactElement => (
  <>
    <ToastContainer hideProgressBar={false} pauseOnFocusLoss={false} />
  </>
);
