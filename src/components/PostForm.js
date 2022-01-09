import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useCreatePost } from '../graphql/useCreatePost'
import { useForm } from '../util/hooks'

function PostForm() {
  const { values, onSubmit, onChange } = useForm(createPostCB, {
    body: '',
  })

  const { createPost, error } = useCreatePost(values)

  function createPostCB() {
    createPost()
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a post</h2>
        <Form.Field>
          <Form.Input
            type="text"
            placeholder="Hi World!"
            name="body"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />

          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <div className="ui error message" style={{ marginBottom: 20 }}>
          <ul className="list">
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default PostForm
