import { gql } from "@apollo/client";

export const CHARECTER = gql`
  query {
    characters(page: 2) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        origin {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  }
`;
// https://www.youtube.com/watch?v=tE3WOGIJ1mI&ab_channel=JamesPerkins
