import {useState} from 'react'
import Producto from './Producto'
import Solicitud from './Solicitud'


const Solicitudes = () => {
  const[productoFao, setProductoFao] = useState(false)

  const handleClickFAO = () => {
    setProductoFao(true)
  }

  return (
    <div className="container mx-auto">
      {productoFao ?
        <Solicitud /> :
        <Producto handleClickFAO={handleClickFAO} />
      }
    </div>
  )
}

export default Solicitudes
