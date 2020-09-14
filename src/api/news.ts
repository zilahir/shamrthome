import Parser from "rss-parser";

const parser = new Parser();

export interface IndexNews {
  title: string;
  link: string;
  guid: string;
}

export const getHungarianNews = (): Promise<IndexNews[]> =>
  new Promise((resolve) => {
    parser.parseURL("https://index.hu/24ora/rss/").then((result: any) => {
      resolve(result.items.splice(0, 5));
    });
  });
