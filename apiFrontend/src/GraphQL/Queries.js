import { gql } from "@apollo/client";

export const Load_Users = gql`
  query GetProfile($amount: Int) {
    getProfile(amount: $amount) {
      _id
      name
      qualification
      createdAt
    }
  }
`;

export const Load_ONE_USERS = gql`
  query Query($id: ID!) {
    profile(_id: $id) {
      _id
      name
      qualification
      createdAt
    }
  }
`;
