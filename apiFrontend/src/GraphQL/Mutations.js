import {gql} from '@apollo/client'

export const CREATE_USER_MUTATION=gql`
mutation Mutation($name: String, $qualification: String) {
  createProfile(name: $name, qualification: $qualification) {
    _id
    name
    qualification
    createdAt
  }
}

`
export const DELETE_USER_MUTATION=gql`
mutation DeleteProfile($id: ID!) {
  deleteProfile(_id: $id)
}
`

export const EDIT_USER_MUTATION=gql`
mutation EditProfile($id: ID!, $name: String, $qualification: String) {
  editProfile(_id: $id, name: $name, qualification: $qualification)
}
`
