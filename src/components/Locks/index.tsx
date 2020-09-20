import React, { ReactElement, useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import { Grid } from "@material-ui/core";
import classnames from "classnames";
import styled from "styled-components";

import Box from "../common/Box";
import { colors } from "../../theme/colors";
import Modal from "../common/Modal";
import { doors, Door } from "../../api/doors";
import Lock from "../common/Lock";

import styles from "./Locks.module.scss";

interface HandlerProps {
  openModal: () => void;
}

const Handler = ({ openModal }: HandlerProps): ReactElement => (
  <div onClick={() => openModal()} className={styles.locksHandler}>
    <LockIcon htmlColor={colors.orange} /> <span>Locks</span>
  </div>
);

interface RoomButtonProps {
  borderTopLeftRadius: number;
  borderBottomLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomRightRadius: number;
}

const RoomButton = styled.li<RoomButtonProps>`
  border-top-left-radius: ${(props) => props.borderTopLeftRadius}px;
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius}px;
  border-top-right-radius: ${(props) => props.borderTopRightRadius}px;
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius}px;
`;

const Locks = (): ReactElement => {
  const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
  const [activeRoom, setActiveRoom] = useState<number>(1);
  return (
    <Grid item>
      <Box
        isExpandable
        hasBorder
        handler={<Handler openModal={() => toggleModalOpen(!isModalOpen)} />}
      />
      <Modal isModal={isModalOpen} setModal={toggleModalOpen}>
        <div className={styles.lightModal}>
          <div className={styles.btnContainer}>
            <ul>
              {doors.getAllDoors().map((currentDoor: Door, index: number) => (
                <RoomButton
                  borderTopLeftRadius={index === 0 ? 5 : 0}
                  borderBottomLeftRadius={index === 0 ? 5 : 0}
                  borderTopRightRadius={
                    index === doors.getAllDoors().length - 1 ? 5 : 0
                  }
                  borderBottomRightRadius={
                    index === doors.getAllDoors().length - 1 ? 5 : 0
                  }
                  key={currentDoor.id}
                  onClick={() => setActiveRoom(index)}
                  className={classnames(
                    index === activeRoom ? styles.active : ""
                  )}
                >
                  {currentDoor.name}
                </RoomButton>
              ))}
            </ul>
          </div>
          <div className={styles.lockAnimationContainer}>
            <Lock />
          </div>
        </div>
      </Modal>
    </Grid>
  );
};

export default Locks;
