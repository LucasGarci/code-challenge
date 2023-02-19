import React, { useState, useEffect } from 'react';
import { /*LOAD_DB_URL,*/ POST_TEST_URL } from "../../constants.js"
import { createRandomMetric } from "./metricUtils"
import { useSelector } from 'react-redux'
import MetricsTable from "./MetricsTable"
import ScatterChart from "../scatterChart/ScatterChart"
import Counter from "../counter/Counter"
import { MyButton } from "../../styled/buttons"

//TODO: Set and alert for no server response
const sendMetrics = (metrics, callback) => {
  // En este caso he optado por lo funciona frente a lo bonito
  // Lo ideal sería desactivar el botón de enviar mientras no hubiera al menos 4 métricas 
  // Y crear un flujo para el usuario donde no pueda equivocarse
  if (metrics.length < 4) return alert("Crea al menos 4 métricas")

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  const stringData = JSON.stringify(metrics)
  const requestOptions = {
    method: 'POST',
    headers,
    body: stringData,
  }

  return fetch(POST_TEST_URL, requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log("ERROR !response.ok")
        throw Error(response.status)
      }
      return response.json()
    })
    .then((response) => {
      console.log("YAY", response)
      callback(response)
      // Better to use return bs of pure functions
      //return [response]
    })
    .catch((error) => {
      return error.message
    })
}

//TODO: Use the counter to add various metrics at the same time
const Metrics = () => {
  const count = useSelector((state) => state.counter.value)
  const [metrics, setMetrics] = useState([]);

  //TODO: Make a loadMetrics() to load al metrics from db on componentDidMount
  //Nota: loadMetrics es llamada 2 veces por el StricMode, esto solo afecta al desarrollo, no a producción.
  //esto ocurre como una ayuda para mantener los componentes puros, hablando del paradigma de la programación funcional
  useEffect(() => {
    //loadMetrics()
    return () => {
    }
  }, [])

  const addRandomMetric = () => {
    const newMetric = createRandomMetric()
    setMetrics([...metrics, newMetric])
  }

  return (
    //Uso del frafment no es necesario aquí pero es útil para agrupar varios componentes sin crear nuevos niveles de anidación
    <>
      <div style={{ margin: 'auto', maxWidth: 500 }}>
        <ScatterChart metrics={metrics} />
      </div>
      <div>
        <Counter />
        <MyButton name="Añadir métrica" onClick={addRandomMetric}>Añadir {count} métrica{count > 1 ? "s" : null} </MyButton>
        <MyButton name="Enviar métricas" onClick={() => sendMetrics(metrics, setMetrics)}>Enviar métricas  </MyButton>
      </div>
      <MetricsTable metrics={metrics} />
    </>
  );
};


export default Metrics;




