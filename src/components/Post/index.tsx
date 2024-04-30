import Button from "../Button"
import style from './style.module.css'

type PostProps = {
  labelAction: string
  placeholder: string
  value: string
  btnAction: () => void
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const Post = (props: PostProps) => {
  return (
    <div>
      <textarea
        className={style['post-textarea']}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name=""
        id=""
        cols={30}
        rows={10}>

      </textarea>
      <Button
        onClick={props.btnAction}
        type="button"
        variant="primary">
        {props.labelAction}
      </Button>
    </div>
  )
}

export default Post
