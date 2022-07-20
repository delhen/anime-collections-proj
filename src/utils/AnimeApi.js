import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query ( $page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        title {
          english
          native
        }
        coverImage{
            large
        }
        isAdult
        averageScore
      }
    }
  }
`

export const animeListOptions = (page) => {
  return {
    variables: {"page": page, "perPage": 10}
  }
}