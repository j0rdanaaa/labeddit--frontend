import style from './style.module.css'
import iconLogo from '../../assets/icon-logo.svg'

const Logo = () => {
  return (
    <div className={style['logo-container']}>
      <img src={iconLogo} alt="Logo da aplicação" />
      <h1>LabEddit</h1>
      <h4>O projeto de rede social da Labenu</h4>
    </div>
  )
}

export default Logo
