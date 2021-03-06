import React, { useContext } from 'react'
import { Card, Icon, Image, Label, Button, Popup } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'

function PostCard({
  post: { body, createdAt, id, username, likesCount, CommentsCount, likes },
}) {
  const { user } = useContext(AuthContext)

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likesCount }} />
        <Popup
          content="Comment on Post"
          inverted
          trigger={
            <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
              <Button color="teal" basic>
                <Icon name="comment" />
              </Button>
              <Label basic color="teal" pointing="left">
                {CommentsCount}
              </Label>
            </Button>
          }
        />

        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  )
}

export default PostCard
