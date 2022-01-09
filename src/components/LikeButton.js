import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Button, Popup } from 'semantic-ui-react'
import { useLikePost } from '../graphql/useLikePost'

function LikeButton({ user, post: { likes, id, likesCount } }) {
  const [liked, setLiked] = useState(false)
  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true)
    } else setLiked(false)
  }, [user, likes])

  const likePost = useLikePost(id)

  const likeButton = user ? (
    liked ? (
      <Button color="red">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="red" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="red" basic>
      <Icon name="heart" />
    </Button>
  )
  return (
    <Popup
      content={liked ? 'Unlike' : 'like'}
      inverted
      trigger={
        <Button as="div" labelPosition="right" onClick={likePost}>
          {likeButton}
          <Label basic color="red" pointing="left">
            {likesCount}
          </Label>
        </Button>
      }
    />
  )
}

export default LikeButton
