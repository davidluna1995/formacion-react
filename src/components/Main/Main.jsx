import Button from '../Button/Button'
import './Main.css'

const Main = ({text}) => {
  return (
    <div className='main'>
      <h1>{text}</h1>
      <Button variante='cancelar' text='Cancelar' />
      <Button variante='confirmar' text='Confirmar' />
      <Button variante='aceptar' text='Aceptar' />
    </div>
  )
}

export default Main