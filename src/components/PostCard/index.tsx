import style from './style.module.css'
import { ReactComponent as IconLike } from '../../assets/icon-like.svg'
import { ReactComponent as IconDislike } from '../../assets/icon-dislike.svg'
import { ReactComponent as IconComment } from '../../assets/icon-comment.svg'
import humanNumber from 'human-number'
import { useNavigate } from 'react-router-dom'

type PostCardProps = {
  id: string
  author: string
  content: string
  likes: number
  dislikes: number
  comment?: number
  rating: boolean | null
  btnLike: (id: string) => void
  btnDislike: (id: string) => void
  btnComment?: (id: string) => void
}

const getIconLike = (rating: boolean | null) => {
  const color = rating === true ? '#F9B24E' : '#6F6F6F'
  return <IconLike stroke={color} />
}

const getIconDislike = (rating: boolean | null) => {
  const color = rating === false ? '#FF6489' : '#6F6F6F'
  return <IconDislike stroke={color} />
}

const PostCard = (props: PostCardProps) => {

  const navigate = useNavigate()

  return (
    <div className={style['post-card-container']}>
      <div className={style['post-card-author']}>
        <p>Enviado por: {props.author}</p>
      </div>
      <div className={style['post-card-content']}>
        <p>{props.content}
        </p>
      </div>
      <div className={style['post-card-actions-container']}>
        <div className={style['post-card-actions-item']}>
          <button onClick={() => props.btnLike(props.id)}>
            {getIconLike(props.rating)}
          </button>
          <span className={style['post-card-total']}>
            {humanNumber(props.likes - props.dislikes)}
          </span>
          <button onClick={() => props.btnDislike(props.id)}>
            {getIconDislike(props.rating)}
          </button>

        </div>
        {props.btnComment && (
          <div className={style['post-card-actions-item']}>
            <button onClick={() => props.btnComment &&
              props.btnComment(props.id)}>
              <IconComment onClick={() => navigate(`/posts/${props.id}`)} />
              <span className={style['post-card-total']}>
                {humanNumber(props.comment || 0)}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default PostCard
