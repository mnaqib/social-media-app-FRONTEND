import { gql, useMutation } from '@apollo/client'

const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likesCount
    }
  }
`
export const useLikePost = (id) => {
  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      postId: id,
    },
  })

  return likePost
}
