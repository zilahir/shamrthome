import React, { ReactChild, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import classnames from "classnames";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./Modal.module.scss";
import { BounceInDownDiv } from "./components/BounceInDown";

interface ModalProps {
  isModal: boolean;
  setModal: (value: boolean) => void;
  children: ReactChild[] | ReactChild;
  containerClassName?: string;
}

const Modal = ({
  isModal,
  setModal,
  children,
  containerClassName,
}: ModalProps): ReactElement => {
  const portalSelector = document.querySelector("#root");
  return (
    <>
      <AnimatePresence>
        {isModal && (
          <>
            <BounceInDownDiv
              className={classnames(styles.modalContainer, containerClassName)}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setModal(false)}
              >
                <CloseIcon htmlColor="#ffffff" />
              </button>
              {children}
            </BounceInDownDiv>
          </>
        )}
      </AnimatePresence>
      {isModal &&
        ReactDOM.createPortal(
          <div onClick={() => setModal(false)} className={styles.overlay} />,
          portalSelector ? portalSelector : document.body
        )}
    </>
  );
};

export default Modal;
