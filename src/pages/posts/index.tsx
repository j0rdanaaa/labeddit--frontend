import { Header } from "../../components/Header"
import logo from "../../assets/logo.svg"
import Post from "../../components/Post";
import style from './style.module.css'
import HorizontalLine from "../../components/HorizontalLine";
import PostCard from "../../components/PostCard";
import { useEffect, useState } from "react";
import { createPost, getPosts, likeOrDislike } from "../../services/posts";
import Cookies from "js-cookie";


const Posts = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [newPost, setNewPost] = useState('')
  const [loading, setLoading] = useState(true)

  const addLike = async (id: string) => {
    const currentPosts = [...posts]

    try {
      const newPosts = posts.map((post) => {
        if (post.id === id) {
          const isDislike = post.rating === false
          const isNeutral = post.rating === null
          const isLike = post.rating === true

          let likes = post.likes;

          if (isNeutral || isDislike) {
            likes = likes + 1
          } else if (isLike) {
            likes = likes - 1
          }

          return {
            ...post,
            rating: isNeutral || isDislike ? true : null,
            dislikes: isDislike ? post.dislikes - 1 : post.dislikes,
            likes,
          }
        }
        return post
      })

      setPosts(newPosts)

      await likeOrDislike(id, {
        like: true
      })
    } catch (error) {
      setPosts(currentPosts)
    }
  }

  const removeLike = async (id: string) => {
    const currentPosts = [...posts]
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        const isDislike = post.rating === false
        const isNeutral = post.rating === null
        const isLike = post.rating === true

        let dislikes = post.dislikes;

        if (isNeutral || isLike) {
          dislikes = dislikes + 1
        } else if (isDislike) {
          dislikes = dislikes - 1
        }

        return {
          ...post,
          rating: isLike || isNeutral ? false : null,
          likes: isLike ? post.likes - 1 : post.likes,
          dislikes,
        }
      }
      return post
    })

    setPosts(newPosts)

    try {
      await likeOrDislike(id, {
        like: false
      })
    } catch (error) {
      setPosts(currentPosts)
    }
  }

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts)
      setLoading(false)
    }).catch((err) => {
      console.error(err)
    })
  }, [])

  const handleCreatePost = async () => {
    try {

      const responseCreatePost = await createPost({
        content: newPost
      })

      const createdPost = {
        ...responseCreatePost,
        creator: {
          name: responseCreatePost.creator.name || Cookies.get('user_name'),
          id: responseCreatePost.creator.id
        }
      }

      const newPosts = [createdPost].concat(posts)
      setPosts(newPosts)
      setNewPost('')
    } catch (error) {
      console.log('handle create post => error')
    }
  }

  return (
    <>
      <Header
        logo={logo}
        hasClose={false}
        labelAction="Logout"
      />
      <div className={style['post-container']}>
        <Post
          labelAction="Postar"
          placeholder="Escreva seu post..."
          onChange={(e) => setNewPost(e.currentTarget.value)}
          value={newPost}
          btnAction={handleCreatePost}
        />
        <HorizontalLine />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={style['post-card']}>
            {posts.map((post: any) => (
              <PostCard
                key={post.id}
                id={post.id}
                author={post.creator ? post.creator.name : null}
                btnComment={(id) => console.log(id)}
                btnDislike={(id) => removeLike(id)}
                btnLike={(id) => addLike(id)}
                comment={post.comments}
                content={post.content}
                likes={post.likes}
                dislikes={post.dislikes}
                rating={post.rating}
              />
            ))}
          </div>
        )}
      </div >
    </>
  )
}

export default Posts
