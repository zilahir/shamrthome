import shortid from "shortid";

export interface Event {
  id: string;
  time: string;
  title: string;
}

export const eventsApi = {
  allEvents: [
    { id: shortid.generate(), time: "today", title: "Oskari is coming" },
    { id: shortid.generate(), time: "tomorrow", title: "Grilli party" },
    { id: shortid.generate(), time: "11th of November", title: "Mökki" },
  ],
  getAllEvents: (): Event[] => eventsApi.allEvents,
};
