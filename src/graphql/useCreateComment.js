import { gql, useMutation } from '@apollo/client'

const CREATE_COMMENT = gql`
  mutation ($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      CommentsCount
    }
  }
`

export const useCreateComment = ({
  commentInputRef,
  postId,
  comment,
  setComment,
}) => {
  const [submitComment] = useMutation(CREATE_COMMENT, {
    update() {
      setComment('')
      commentInputRef.current.blur()
    },
    variables: {
      postId,
      body: comment,
    },
  })

  return submitComment
}
