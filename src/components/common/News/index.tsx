import React, { ReactElement, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import Box from "../Box";
import { getFinnishNews, getHungarianNews, News } from "../../../api/news";
import indexLogo from "../../../assets/misc/index.png";
import iltaLehtiLogo from "../../../assets/misc/iltalehti.png";
import Modal from "../Modal";

import styles from "./News.module.scss";

interface HandlerProps {
  type: "INDEX" | "ILTALEHTI";
  openModal: () => void;
}

const Handler = ({ type, openModal }: HandlerProps): ReactElement =>
  type === "INDEX" ? (
    <div onClick={() => openModal()} className={styles.handler}>
      <img src={indexLogo} alt="index" />
      <p>Index</p>
    </div>
  ) : (
    <div onClick={() => openModal()} className={styles.handler}>
      <img src={iltaLehtiLogo} alt="iltalehti" />
      <p>Iltalehti</p>
    </div>
  );

const Newss = (): ReactElement => {
  const [hungarianNews, setHungarianNews] = useState<Array<News>>([]);
  const [finnishNews, setFinnishNews] = useState<Array<News>>([]);
  const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
  useEffect(() => {
    getHungarianNews().then((hunResult: News[]) => {
      setHungarianNews(hunResult);
    });
    getFinnishNews().then((finResult: News[]) => {
      setFinnishNews(finResult);
    });
  }, []);
  return (
    <>
      <Grid item>
        <Box
          className={styles.newsRootContainer}
          handler={
            <Handler
              openModal={() => toggleModalOpen(!isModalOpen)}
              type="INDEX"
            />
          }
          isExpandable
        />
      </Grid>
      <Grid item>
        <Box
          handler={
            <Handler
              openModal={() => toggleModalOpen(!isModalOpen)}
              type="ILTALEHTI"
            />
          }
          className={styles.newsRootContainer}
          isExpandable
        />
      </Grid>
      <Modal setModal={toggleModalOpen} isModal={isModalOpen}>
        <div className={styles.innerContainer}>
          <h1>Index 🇭🇺</h1>
          <ul>
            {hungarianNews.map((currentNews: News) => (
              <li key={currentNews.guid}>{currentNews.title}</li>
            ))}
          </ul>
          <ul style={{ display: "none" }}>
            {finnishNews.map((currentNews: News) => (
              <li key={currentNews.guid}>{currentNews.title}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Newss;
