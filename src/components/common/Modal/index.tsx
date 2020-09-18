import React, { ReactChild, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";

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
          <BounceInDownDiv className={styles.modalContainer}>
            <button className={styles.closeBtn} onClick={() => setModal(false)}>
              <CloseIcon htmlColor="#ffffff" />
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
