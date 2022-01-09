import { gql, useMutation } from '@apollo/client'

const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`

export const useDeletePost = (postId) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId,
    },
    update(cache) {
      cache.modify({
        fields: {
          getPosts(existingPosts = []) {
            return existingPosts.filter((post) => post.id !== postId)
          },
        },
      })
    },
  })

  return deletePost
}
