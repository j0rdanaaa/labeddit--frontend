import style from './style.module.css'

type InputProps = {
  placeholder: string
  type: string
  value: string
  required?: boolean
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      value={props.value}
      className={style.input}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
    />
  )
}

export default Input
