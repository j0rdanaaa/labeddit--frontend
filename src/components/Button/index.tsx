import style from './style.module.css'

type ButtonProps = {
  children: React.ReactNode
  variant: "primary" | "secondary"
  onClick?: (e: React.FormEvent) => void
  type: any
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${style.button} ${style[`button-${props.variant}`]}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default Button
