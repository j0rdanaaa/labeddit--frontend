import style from './style.module.css'
import iconClose from '../../assets/icon-close.svg'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

type HeaderProps = {
  hasClose: boolean;
  logo: string,
  labelAction: string
}

const logout = () => {
  Cookies.remove('user_name')
  Cookies.remove('token')
  window.location.href = '/'
}

export const Header = (props: HeaderProps) => {

  return (
    <header className={style['header-container']}>
      <div className={style['header-item']}>
        {props.hasClose && (
          <Link to="/posts" className={style['header-btn-close']}>
            <img src={iconClose} alt="icone para fechar o header" />
          </Link>
        )}
      </div>
      <div className={style['header-item']}>
        <img src={props.logo} alt="logo da aplicação" />
      </div>
      <div className={style['header-item']}>
        <button
          className={style['header-btn-action']}
          onClick={logout}>
          <p>{props.labelAction}</p>
        </button>
      </div>
    </header>
  )
}