import React, { ReactElement, useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import { Grid } from "@material-ui/core";
import classnames from "classnames";
import styled from "styled-components";

import Box from "../common/Box";
import { colors } from "../../theme/colors";
import Modal from "../common/Modal";
import { Room, rooms } from "../../api/rooms";

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
              {rooms
                .getAllRooms([4])
                .map((currentRoom: Room, index: number) => (
                  <RoomButton
                    borderTopLeftRadius={index === 0 ? 5 : 0}
                    borderBottomLeftRadius={index === 0 ? 5 : 0}
                    borderTopRightRadius={
                      index === rooms.getAllRooms([4]).length - 1 ? 5 : 0
                    }
                    borderBottomRightRadius={
                      index === rooms.getAllRooms([4]).length - 1 ? 5 : 0
                    }
                    key={currentRoom.id}
                    onClick={() => setActiveRoom(index)}
                    className={classnames(
                      index === activeRoom ? styles.active : ""
                    )}
                  >
                    {currentRoom.name}
                  </RoomButton>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </Grid>
  );
};

export default Locks;
