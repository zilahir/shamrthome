export interface Door {
  id: number;
  name: string;
}

export const doors = {
  allDoors: [
    { id: 1, name: "Etuvi" },
    { id: 2, name: "Terassin Ovi" },
  ],
  getAllDoors: (): Door[] => doors.allDoors,
};
