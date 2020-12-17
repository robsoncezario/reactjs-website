import { gql } from 'apollo-boost';

export const signIn = `
  query SignIn($data: AccountInput!) {
    signIn(data: $data) {
      id,
      uuid, 
      username,
      email,
      discord,
      twitch,
      token,
      ranks {
        rankType {
          id,
          name,
          type,
          level,
          color
        }
      }
    }
  }`;