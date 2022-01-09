import React, { useContext } from 'react'
import { Grid, Transition } from 'semantic-ui-react'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
import { AuthContext } from '../context/auth'
import { useGetPosts } from '../graphql/useGetPosts'

function Home() {
  const { loading, data } = useGetPosts()
  const { user } = useContext(AuthContext)

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          <Transition.Group duration={200}>
            {data.getPosts &&
              data.getPosts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  )
}

export default Home
