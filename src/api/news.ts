import Parser from "rss-parser";

const parser = new Parser();

export interface News {
  title: string;
  link: string;
  guid: string;
}

export const getHungarianNews = (): Promise<News[]> =>
  new Promise((resolve) => {
    parser.parseURL("https://index.hu/24ora/rss/").then((result: any) => {
      resolve(result.items.splice(0, 15));
    });
  });

export const getFinnishNews = (): Promise<News[]> =>
  new Promise((resolve) => {
    parser
      .parseURL(
        "https://cors-anywhere.herokuapp.com/https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET"
      )
      .then((result: any) => {
        resolve(result.items.splice(0, 15));
      });
  });
