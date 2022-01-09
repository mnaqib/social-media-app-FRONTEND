import { gql, useMutation } from '@apollo/client'

const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      CommentsCount
    }
  }
`
export const useDeleteComment = ({ postId, commentId }) => {
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    variables: {
      postId,
      commentId,
    },
  })

  return deleteComment
}
