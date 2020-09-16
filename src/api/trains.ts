import axios, { AxiosResponse } from "axios";
import { flatten } from "lodash";

export interface TimeTable {
  cancelled: boolean;
  commercialStop: boolean;
  commercialTrack: string;
  countryCode: "FI";
  scheduledTime: string;
  stationShortCode: "LPV" | string;
  stationUICCode: number;
  trainStopping: boolean;
  type: string;
}

export const getLeavingTrains = (): Promise<TimeTable[]> =>
  new Promise((resolve) => {
    axios
      .get("https://rata.digitraffic.fi/api/v1/live-trains/station/LPV/HKI")
      .then((result: AxiosResponse) => {
        const filtered = result.data.map((thisTrain: any): TimeTable[] =>
          thisTrain.timeTableRows.filter(
            (thisTimeTable: TimeTable) =>
              thisTimeTable.stationShortCode === "LPV" &&
              thisTimeTable.type === "DEPARTURE"
          )
        );
        resolve(flatten(filtered.slice(0, 5)));
      });
  });
