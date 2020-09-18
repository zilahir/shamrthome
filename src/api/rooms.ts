export interface Room {
  id: number;
  name: string;
}

export const rooms = {
  allRooms: [
    { id: 1, name: 'Makuuhuone 🅰', },
    { id: 2, name: 'Olohuone', },
    { id: 3, name: 'Keittiö', },
    { id: 4, name: 'Terassi', },
    { id: 5, name: 'Makuuhuone 🅱', },
  ],
  getAllRooms: (filter:number):Room[] => (
    rooms.allRooms.filter((room: Room) => (
      room.id !== filter
    ))
  ),
};
