import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Confirm, Icon, Popup } from 'semantic-ui-react'
import { useDeleteComment } from '../graphql/useDeleteComment'
import { useDeletePost } from '../graphql/useDeletePost'

function DeleteButton({ postId, redirect, commentId }) {
  const [confirm, setConfirm] = useState(false)

  const deletePost = useDeletePost(postId)
  const deleteComment = useDeleteComment({ postId, commentId })

  const navigate = useNavigate()
  return (
    <>
      <Popup
        content={commentId ? 'Delete Comment' : 'Delete Post'}
        inverted
        trigger={
          <Button
            as="div"
            color="blue"
            onClick={() => setConfirm(true)}
            floated="right"
          >
            <Icon style={{ margin: 0 }} name="trash alternate"></Icon>
          </Button>
        }
      />

      <Confirm
        open={confirm}
        onCancel={() => setConfirm(false)}
        onConfirm={() => {
          if (redirect) navigate('/')
          commentId ? deleteComment() : deletePost()
          setConfirm(false)
        }}
      />
    </>
  )
}

export default DeleteButton
