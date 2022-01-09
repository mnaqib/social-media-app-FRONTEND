import { gql, useQuery } from '@apollo/client'

const FETCH_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likesCount
      likes {
        username
      }
      CommentsCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`

export const useGetOnePost = (postId) => {
  const { data } = useQuery(FETCH_POST, {
    variables: {
      postId,
    },
  })

  return data
}
