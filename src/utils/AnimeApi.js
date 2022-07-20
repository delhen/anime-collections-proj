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

export const GET_ANIME_DETAIL = gql`
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
    english
    native
    }
    coverImage{
        large
    }
    genres
    status
    duration
    isAdult
    averageScore
    description
  }
}
`

export const animeListOptions = (page) => {
  return {
    variables: {"page": page, "perPage": 10}
  }
}