export interface Rooms {
  id: number;
  name: string;
}

export const rooms = {
  allRooms: [
    { id: 1, name: 'Makuuhuone', },
    { id: 2, name: 'Olohuone', },
    { id: 3, name: 'Keittiö', },
    { id: 3, name: 'Terassi', }
  ],
  getAllRooms: ():Rooms[] => rooms.allRooms,
};
