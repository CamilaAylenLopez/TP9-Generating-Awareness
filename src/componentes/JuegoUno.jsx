import './Juegos.css'
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const JuegoUno = (props) => {
  const [objetoActual, setObjetoActual] = useState(0)
  const [juegoTerminado, setJuegoTerminado] = useState(false)
  const [puntos, setPuntos] = useState(0)
  const [objeto, setObjeto] = useState([{
    objeto: 'cuaderno',
    tacho: 'azul',
    imagen: 'https://img.freepik.com/foto-gratis/cuaderno-rayado-blanco-sobre-mesa-blanca_53876-165405.jpg?w=2000'
  },
  {
    objeto: 'banana',
    tacho: 'marron',
    imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/V4Z6O774F5BKLDY2ZNKEHE6MVI.jpg'
  },
  {
    objeto: 'botella de vidrio',
    tacho: 'verde',
    imagen: 'https://www.laeditorial.com.ar/21963-home_default/botella-vidrio-500cc-jugo-agua-leche-t-38.jpg'
  },
  {
    objeto: 'pañal usado',
    tacho: 'negro',
    imagen: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/panales-que-son_0.jpg'
  },
  {
    objeto: 'diario',
    tacho: 'azul',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Primera_edici%C3%B3n_del_diario_argentino_Clar%C3%ADn.jpg'
  },
  {
    objeto: 'tuerca',
    tacho: 'amarillo',
    imagen: 'https://www.bmbulmetal.com.ar/database/articulos/fotos/62/TUERCA-HEXAGONAL-GRADO2-HIERRO-UNC-UNF-WTW-CALIDAD8.8-METRICO-PULGADA-MA-MB-MC.jpg'
  },
  {
    objeto: 'lata',
    tacho: 'amarillo',
    imagen: 'https://img.freepik.com/vector-premium/lata-aluminio-brillante-refresco-o-plantilla-cerveza-blanco_88653-860.jpg'
  },
  {
    objeto: 'pañuelo',
    tacho: 'negro',
    imagen: 'https://s03.s3c.es/imag/_v0/770x420/8/8/9/GettyImages-97611377.jpg'
  },
  {
    objeto: 'botella de plastico',
    tacho: 'verde',
    imagen: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/sidelg.jpg'
  },
  ])

  useEffect(() => {
    setObjetoActual(Math.floor(Math.random() * objeto.length))
  }, [])

  const verificar = (e) => {
    e.preventDefault();
    if (juegoTerminado === false) {
      if (objeto[objetoActual].tacho === e.target.alt) {
        setPuntos(puntos + 20)
        const objetosSinUsar = objeto.slice()
        objetosSinUsar.splice(objetoActual, 1)
        setObjeto(objetosSinUsar)
        if (objetosSinUsar.length === 0) {
          setJuegoTerminado(true)
          alert('El juego termino!!!')
        }
        else {
          setObjetoActual(Math.floor(Math.random() * objetosSinUsar.length));
        }
      }
      else {
        alert('Prueba otra vez :)');
      }
    }
    else {
      alert('EL JUEGO TERMINO. EL GATO NO ES UN OBJETO. NO VA A LA BASURAAAAAAAAAAAA!!!!!!!!!')
    }
  }

  return (
    <>
      <h1 className='titulo'>Juego de reciclar</h1>
      <h2>Puntos: {puntos}</h2>
      <div className='centrar'>
        <img className='imagenObjeto' alt='' src={Object.keys(objeto).length === 0 ? "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg" : objeto[objetoActual].imagen} />
      </div>
      <div className='contenedor'>
        <img className='imagenes' src={juegoTerminado ? "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg" : 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_PAPEL_Y_CARTON.jpg'} value='azul' onClick={verificar} alt='azul' />
        <img className='imagenes' src={juegoTerminado ? "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg" : 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_ORGANICOS.jpg'} value='marron' onClick={verificar} alt='marron' />
        <img className='imagenes' src={juegoTerminado ? "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg" : 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_APROVECHABLES.jpg'} value='verde' onClick={verificar} alt='verde' />
        <img className='imagenes' src={juegoTerminado ? "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg" : 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_NO_APROVECHABLES.jpg'} value='negro' onClick={verificar} alt='negro' />
        <img className='imagenes' src={juegoTerminado ? "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg" : 'https://www.jqs-consulting.com/wp-content/uploads/2023/03/63.png'} value='amarillo' onClick={verificar} alt='amarillo' />
      </div>
    </>
  )
}
/**{tachoBasura && tachoBasura.map((tachoBasura, i) => (
            <div key={i}>
              <button>
                <img className='' src={tachoBasura.imagen} />
              </button>
            </div>
          ))} */

export default JuegoUno