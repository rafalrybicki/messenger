import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
      user {
        id
        firstName
        lastName
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
          id
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