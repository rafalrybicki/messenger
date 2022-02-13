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

export type Message = {
  id: string;
  body: string;
  insertedAt: string;
  user: User;
}

export type NewMessage = {
  roomId: string;
  body: string
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

export type MessageInputProps = {
  roomId: string
}