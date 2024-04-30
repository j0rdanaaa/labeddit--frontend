import style from './style.module.css'

const Checkbox = () => {
  return (
    <div>
      <div className={style['checkbox-text']}>
        <p>Ao continuar, você concorda com o nosso <strong>Contrato de usuário</strong> e nossa <strong>Política de Privacidade</strong>
        </p>
      </div>
      <div className={style['checkbox-check']}>
        <input type="checkbox" />
        <p>Eu concordo em receber email sobre coisas legais no Labeddit</p>
      </div>
    </div>
  )
}

export default Checkbox
