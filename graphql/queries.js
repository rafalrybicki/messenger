import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($id: String!){
		room(id: $id) {
			name
      messages {
        id
        body
        insertedAt
        user {
          firstName
          lastName
        }
      }
      user {
        id
        firstName
        lastName
      }
		}
	}
`;