import axios from "axios";
import format from "date-fns/format";

export interface TimeTable {
  cancelled: boolean;
  commercialStop: boolean;
  commercialTrack: string;
  countryCode: "FI";
  scheduledTime: string;
  stationShortCode: "string";
  stationUICCode: number;
  trainStopping: boolean;
  type: string;
}

export const getLeavingTrains = (): Promise<TimeTable[]> =>
  new Promise((resolve) => {
    axios
      .get(
        `https://rata.digitraffic.fi/api/v1/live-trains/station/LPV/HKI?startDate=${format(
          new Date(),
          "yyyy-MM-dd'T'HH:mm:ss"
        )}.000Z`
      )
      .then((result) => {
        const filtered = result.data.map((thisTrain: any): TimeTable[] =>
          thisTrain.timeTableRows.filter(
            (thisTimeTable: any) =>
              thisTimeTable.stationShortCode === "LPV" &&
              thisTimeTable.type === "DEPARTURE"
          )
        );
        resolve(filtered.slice(0, 5));
      });
  });
