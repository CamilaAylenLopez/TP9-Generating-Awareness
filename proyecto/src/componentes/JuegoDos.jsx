import './Juegos.css'
import React, { useEffect, useState } from "react"

const JuegoDos = (props) => {
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [juegoTerminado, setJuegoTerminado] = useState(0)
  const [puntos, setPuntos] = useState(0)
  const [respondioCorrectamente, setRespondioCorrectamente] = useState(false)
  const [elId, setElId] = useState(1)
  const [preguntas, setPreguntas] = useState([{
    id: '1',
    pregunta: 'El cambio climático es uno de los temas más presentes en la actualidad; ocupa conversaciones, titulares de periódicos y forma parte de las agendas políticas de la mayoría de países de todo el mundo. Por ello, no podríamos empezar este test si no aclarando este concepto, por lo que os preguntamos: ¿Sabes qué es el cambio climático?',
    a: 'Se trata de los cambios a largo plazo de las temperaturas y los patrones climáticos a nivel global de nuestro planeta',
    b: 'Es el simple aumento de la temperatura de la Tierra',
    c: null,
    respuestaCorrecta: 'a',
    explicacion: 'Exacto, cuando hablamos de cambio climático nos referimos la variación de global del clima de la Tierra a largo plazo. Estos cambios han existido desde comienzos de la historia de la Tierra y ahora mismo estamos viviendo uno de ellos. Con la salvedad, eso sí, de que por primera vez en nuestra historia disponemos de las herramientas y los datos suficientes como para estudiar el fenómeno.'
  },
  {
    id: '2',
    pregunta: 'En una de las respuestas anteriores hablamos del aumento de las temperaturas de la Tierra. ¿Dirías que el calentamiento global y el cambio climático son el mismo fenómeno?',
    a: 'Si, son exactamente lo mismo',
    b: 'En absoluto, habría que diferenciar algunos matices',
    c: null,
    respuestaCorrecta: 'b',
    explicacion: 'Si has diferenciado entre los dos fenómenos estás en lo correcto. El calentamiento global y el cambio climático no son exactamente lo mismo, si no que el segundo es una consecuencia del cambio climático actual.',
  },
  {
    id: '3',
    pregunta: 'De hecho, a lo largo de la historia de nuestro planeta se han sucedido varios cambios climáticos de manera natural. Algunos han dado como resultado un clima más cálido y otros por el contrario un clima más frío. ¿Sabes cuál es la particularidad del cambio climático que estamos presenciando en la actualidad?',
    a: 'Que el cambio climático actual está siendo provocado por la actividad de los seres humanos',
    b: 'Que se está produciendo en un lapso de tiempo sin precedentes',
    c: 'Ambas respuestas son correctas',
    respuestaCorrecta: 'c',
    explicacion: 'Efectivamente, el cambio climático es un proceso natural, sin embargo lo que diferencia al que se está produciendo en la actualidad de los acontecidos en el pasado es que la acción humana está motivando que se produzca a un ritmo muy acelerado.',
  },
  {
    id: '4',
    pregunta: 'Ahora que sabes que el cambio climático tiene un componente antropogénico, ¿cúal dirías que es la principal causa de que se produzca?',
    a: 'El agujero de la capa de ozono',
    b: 'La acumulación de gases de efecto invernadero en la atmósfera',
    c: null,
    respuestaCorrecta: 'b',
    explicacion: 'La principal razón del cambio climático actual es el aumento de los llamados gases de efecto invernadero en la atmósfera, principalmente aquellos procedentes de la quema de combustibles fósiles como el petróleo y el carbón. Su acumulación en la capa gaseosa de nuestro planeta intensifica el efecto invernadero que se produce de forma natural en la Tierra, sin el cual no sería posible la vida en la Tierra, pero que en exceso, puede afectar al clima a nivel global.',
  },
  {
    id: '5',
    pregunta: 'Hablando de gases de efecto invernadero, ¿sabes cuál de los que enumeramos a continuación no es uno de ellos?',
    a: 'Dióxido de Carbono',
    b: 'Hidrógeno',
    c: null,
    respuestaCorrecta: 'b',
    explicacion: 'El único de los gases que no contribuye al afecto invernadero de este listado es el hidrógeno. Se trata de uno de los gases menos abundantes de nuestra atmósfera y uno de los más ligeros, por lo que suele desplazarse a las capas altas de la atmósfera y escapar de nuestro planeta. Los demás gases citados se acumulan en nuestra atmósfera y absorben la radiación infrarroja del sol, lo que provoca un calentamiento global del planeta al no dejar escapar el calor.',
  },
  {
    id: '6',
    pregunta: 'Estos gases de efecto invernadero proceden de varias fuentes, algunas de las cuales citamos a continuación, pero, ¿sabrías decir cuál es la principal fuente actual de gases de efecto invernadero y por tanto el principal responsable de cambio climático?',
    a: 'La obtención de energía',
    b: 'El transporte',
    c: null,
    respuestaCorrecta: 'a',
    explicacion: 'La principal fuente de gases de efecto invernadero en la actualidad es la producción de energía, sobre todo la obtenida a partir de combustibles fósiles como el petróleo, el gas natural o el carbón.',
  },
  {
    id: '7',
    pregunta: 'Un momento, ya sabemos qué el es cambio climático, por qué se produce, y cuales son sus principales fuentes, pero ¿sabrías decir cuando se estima que empezó a producirse?',
    a: 'La revolución industrial',
    b: 'La década de 1950-1960',
    c: 'El año 2000',
    respuestaCorrecta: 'a',
    explicacion: 'Se estipula que los inicios del cambio climático los encontramos en la revolución industrial, momento en que el carbón comenzó a ser la principal fuente de energía en todo el mundo. Sin embargo, su descubrimiento científico se produjo a principios del siglo XIX cuando se identificó por primera vez el efecto invernadero natural y se sospechó que había habido varios cambio en el clima a lo largo de la historia de la Tierra.',
  },
  {
    id: '8',
    pregunta: 'Dicho esto, ¿sabes quién fue el primero en relacionar el aumento de la temperatura de la Tierra con la acumulación de dióxido de carbono?',
    a: 'John Tyndall',
    b: 'Eunice Foote',
    c: null,
    respuestaCorrecta: 'b',
    explicacion: 'La primera persona que propuso que la concentración de CO2 en la atmósfera podía provocar un aumento significativo de la temperatura de la Tierra fue una climatóloga estadounidense llamada Eunice Foote. Sin embargo, la fama se la llevó el irlandés John Tyndall unos años más tarde.',
  },
  {
    id: '9',
    pregunta: 'Nos estamos centrando mucho en el aumento de las temperaturas, pero que haga más calor no es, ni de lejos, la única consecuencia del cambio climático. ¿Sabes qué otros efectos para la vida en la Tierra tiene este fenómeno?',
    a: 'Aumento de sequias e inundaciones',
    b: 'Aumento de los fenómenos naturales extremos',
    c: 'Todas las respuestas son correctas',
    respuestaCorrecta: 'c',
    explicacion: 'Efectivamente, todas las citadas son potenciales consecuencias del cambio climático en la Tierra. Pero además, el cambio climático también tiene responsabilidad en el derretimiento de los glaciares, el aumento del nivel del mar, en cambios abruptos en los ecosistemas o en la desaparición de algunas especies en nuestro planeta.',
  },
  {
    id: '10',
    pregunta: 'Vamos a poner algunas cifras: ¿Desde su inicio, cuanto crees que ha aumentado la temperatura en la Tierra debido al cambio climático?',
    a: '1,5ºC',
    b: '1,1ºC',
    c: null,
    respuestaCorrecta: 'a',
    explicacion: 'Para realizar esta afirmación los científicos toman como referencia los las temperaturas anteriores a la era industrial, momento desde el cual han aumentado en 1,1ºC según informes de las Naciones Unidas. Según los expertos se trata de un cambio muy abrupto y producido en un lapso muy corto de tiempo.',
  },
  {
    id: '11',
    pregunta: 'Esto nos lleva a una pregunta obligada: ¿Sabes a cuánto habría que limitar el aumento de la temperatura media global para evitar las peores consecuencias del cambio climático?',
    a: '1,5ºC',
    b: '4ºC',
    c: null,
    respuestaCorrecta: 'a',
    explicacion: 'Según el consenso científico, un aumento superior a los 1,5 ºC podría tener consecuencias desastrosas para el planeta, por o que el Acuerdo de París estableció como meta limitar el aumento de las temperaturas globales a menos de 2ºC por encima de los niveles preindustriales, preferiblemente a 1,5ºC.',
  },
  {
    id: '12',
    pregunta: 'Y para terminar, un momento histórico: ¿sabes qué gran acuerdo internacional estableció por primera vez objetivos de reducción de gases de efecto invernadero?',
    a: 'Acuerdo de Greta Thunberg',
    b: 'Protocolo de Kioto',
    c: null,
    respuestaCorrecta: 'b',
    explicacion: 'Exacto, el famoso protocolo de Kioto fue el primero en establecer con su entrada en vigor en el año 2005, el objetivo de reducir los gases de efecto invernadero en los países desarrollados y en vías de desarrollo. Estableció que las emisiones de gases de efecto invernadero de los países industrializados deberían reducirse al menos un 5% por debajo de los niveles de 1990 en el período 2008-2012.',
  },
  ])

  useEffect(() => {
    setPreguntaActual(0)
  }, [])

  const verificar = (e) => {
    e.preventDefault();
    if (juegoTerminado === 0) {
      if (preguntas[preguntaActual].respuestaCorrecta === e.target.id) {
        setPuntos(puntos + 20)
        if (preguntaActual === 11) {
          setJuegoTerminado(1)
          alert('El juego termino!!!')
        }
        else {
          setRespondioCorrectamente(true)
          setElId(elId + 1)
          setPreguntaActual(elId)
        }
      }
      else {
        setPuntos(puntos - 10)
        alert('Prueba otra vez :)')
        if(puntos <= -20){
          setJuegoTerminado(2)
        }
      }
    }
    else {
      alert('EL JUEGO TERMINO!!!!!!!!!!')
    }
  }

  return (
    <>
    <div>
      <h1 className='titulo'>Juego de trivia</h1>
      <h2>Veamos cuanto sabes sobre el calentamiento global y el cambio climatico</h2>
      <h2>Puntos: {puntos}</h2>
      <div className='centrar'>
        <img src={juegoTerminado === 1 ? 'https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg' : juegoTerminado === 2 ? 'https://i.pinimg.com/550x/b6/be/1f/b6be1f7dde9692dd57419a5ea89a9faa.jpg' : null}/>
      </div>
      <div className={respondioCorrectamente === true ? 'caudroDos' : null}>
        <h4 className='margenJuegoDos'>{respondioCorrectamente === true ? 'sobre la pregunta anterior....' + preguntas[preguntaActual].explicacion : null}</h4>
      </div>
      <div className={juegoTerminado === 1 || juegoTerminado === 2 ? null : 'cuadro'}>
        <h4 className='margenJuegoDos'>{juegoTerminado === 1 || juegoTerminado ===2 ? null : preguntas[preguntaActual].id + '/12 ' + preguntas[preguntaActual].pregunta}</h4>
        <h6 className='margenJuegoDos' id='a' onClick={verificar}>{juegoTerminado === 1 || juegoTerminado === 2  ? null : 'a) ' + preguntas[preguntaActual].a}</h6>
        <h6 className='margenJuegoDos' id='b' onClick={verificar}>{juegoTerminado === 1 || juegoTerminado === 2  ? null : 'b) ' + preguntas[preguntaActual].b}</h6>
        <h6 className='margenJuegoDos' id='c' onClick={verificar}>{juegoTerminado === 1 || juegoTerminado === 2  ? null : preguntas[preguntaActual].c !== null ? 'c) ' + preguntas[preguntaActual].c : null}</h6>
      </div>
      
    </div>
    </>
  )
}

export default JuegoDos