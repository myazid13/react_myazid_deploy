import { gql } from "@apollo/client";

// Read Data Fix
export const GET_USERS = gql`
  query users {
    users(order_by: { timeStamp: asc }) {
      nim
      avatar
      lastName
      firstName
      address
      uuid
    }
  }
`;

// Create Data Fix
export const ADD_USER = gql`
  mutation MyMutation($object: users_insert_input = {}) {
    insert_users_one(object: $object) {
      uuid
    }
  }
`;

// Update Data Fix
export const UPDATE_USER = gql`
  mutation MyMutation($pk_columns: users_pk_columns_input = {}, $_set: users_set_input = {}) {
    update_users_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

// Delete Data Fix
export const DELETE_USER = gql`
  mutation MyMutation($uuid: uuid!) {
    delete_users_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
