import React, { ReactElement, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import Box from "../Box";
import { getFinnishNews, getHungarianNews, News } from "../../../api/news";

import styles from "./News.module.scss";

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
    <Grid container>
      <Grid item lg={6}>
        <Box className={styles.newsRootContainer}>
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
      <Grid item lg={6}>
        <Box className={styles.newsRootContainer}>
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
    </Grid>
  );
};

export default Newss;
