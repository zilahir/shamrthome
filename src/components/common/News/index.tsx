import React, { ReactElement, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import Box from "../Box";
import { getFinnishNews, getHungarianNews, News } from "../../../api/news";
import indexLogo from "../../../assets/misc/index.png";
import iltaLehtiLogo from "../../../assets/misc/iltalehti.png";

import styles from "./News.module.scss";

interface HandlerProps {
  type: "INDEX" | "ILTALEHTI";
}

const Handler = ({ type }: HandlerProps): ReactElement =>
  type === "INDEX" ? (
    <div className={styles.handler}>
      <img src={indexLogo} alt="index" />
      <p>Index</p>
    </div>
  ) : (
    <div className={styles.handler}>
      <img src={iltaLehtiLogo} alt="iltalehti" />
      <p>Iltalehti</p>
    </div>
  );

const Newss = (): ReactElement => {
  const [hungarianNews, setHungarianNews] = useState<Array<News>>([]);
  const [finnishNews, setFinnishNews] = useState<Array<News>>([]);
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
          handler={<Handler type="INDEX" />}
          isExpandable
        >
          <div className={styles.innerContainer}>
            <h1>Index 🇭🇺</h1>
            <ul>
              {hungarianNews.map((currentNews: News) => (
                <li key={currentNews.guid}>{currentNews.title}</li>
              ))}
            </ul>
          </div>
        </Box>
      </Grid>
      <Grid item>
        <Box
          handler={<Handler type="ILTALEHTI" />}
          className={styles.newsRootContainer}
          isExpandable
        >
          <div className={styles.innerContainer}>
            <h1>Iltalehti 🇫🇮</h1>
            <ul>
              {finnishNews.map((currentNews: News) => (
                <li key={currentNews.guid}>{currentNews.title}</li>
              ))}
            </ul>
          </div>
        </Box>
      </Grid>
    </>
  );
};

export default Newss;
