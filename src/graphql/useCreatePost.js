import { gql, useMutation } from '@apollo/client'

const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likesCount
      comments {
        id
        body
        username
        createdAt
      }
      CommentsCount
    }
  }
`

export const useCreatePost = (values) => {
  const [createPost, { error }] = useMutation(CREATE_POST, {
    variables: values,
    update(cache, { data: { createPost } }) {
      values.body = ''
      cache.modify({
        fields: {
          getPosts(existingPosts = []) {
            return [createPost, ...existingPosts]
          },
        },
      })
    },
  })

  return {
    createPost,
    error,
  }
}
