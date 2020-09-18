import React, { ReactChild, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

import { colors } from "../../../theme/colors";

import styles from "./Modal.module.scss";
import { BounceInDownDiv } from "./components/BounceInDown";

interface ModalProps {
  isModal: boolean;
  setModal: (value: boolean) => void;
  children: ReactChild[] | ReactChild;
}

const Modal = ({ isModal, setModal, children }: ModalProps): ReactElement => {
  const portalSelector = document.querySelector("#root");
  return (
    <AnimatePresence>
      {isModal && (
        <>
          <BounceInDownDiv
            style={{
              position: "fixed",
              background: colors.mainAppColor,
              width: "90%",
              height: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              borderRadius: "5px",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 9,
            }}
          >
            <button
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onClick={() => setModal(false)}
            >
              X
            </button>
            {children}
          </BounceInDownDiv>
          {ReactDOM.createPortal(
            <div className={styles.overlay} />,
            portalSelector ? portalSelector : document.body
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
