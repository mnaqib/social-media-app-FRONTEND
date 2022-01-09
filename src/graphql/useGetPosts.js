import { gql, useQuery } from '@apollo/client'

const FETCH_POSTS_QUERY = gql`
  query getPosts {
    getPosts {
      id
      body
      createdAt
      username
      comments {
        body
        id
        username
        createdAt
      }
      likes {
        username
      }
      likesCount
      CommentsCount
    }
  }
`
export const useGetPosts = () => {
  const { data, loading } = useQuery(FETCH_POSTS_QUERY)
  return {
    data,
    loading,
  }
}
