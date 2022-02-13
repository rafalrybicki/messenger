export type Room = {
  id: string;
  name: string;
  messages?: Message[];
  user?: User;
}

export type RoomData = {
  room: Room
}

export type RoomVars = {
  id: string
}

export type UsersRooms = {
  usersRooms: {
    rooms: Room[];
    user: User;
  }
}

export type Rooms = {
  rooms: Room[];
}

type Message = {
  id: string;
  body: string;
  insertedAt: string;
  user: User;
}

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  role?: string;
}

export type HeaderButtonsProps = {
  iconOne: JSX.Element;
  iconTwo: JSX.Element;
}

export type MessageProps = {
  body: string;
  messageType: 'sent' | 'received';
}