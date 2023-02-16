import React, { useState, useEffect } from 'react';
import { /*LOAD_DB_URL,*/ POST_TEST_URL } from "../../app/constants.js"
import { createRandomMetric } from "./metricUtils"
import MetricsTable from "./MetricsTable"
import ScatterChart from "../scatterChart/ScatterChart"
import Button from 'react-bootstrap/Button';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);



const updateMetrics = (metrics, callback) => {
  // En este caso he optado por lo funciona frente a lo bonito
  // Lo ideal sería desactivar el botón de enviar mientras no hubiera al menos 4 métricas 
  // Y crear un flujo para el usuario donde no pueda equivocarse
  if (metrics.length < 4) return alert("Crea al menos 4 métricas")

  console.log("Fetch start")

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

const Metrics = () => {
  const [metrics, setMetrics] = useState([]);

  const addMetric = (metric) => {
    setMetrics([...metrics, metric]);
  }

  //Nota: updateMetrics es llamada 2 veces por el StricMode, esto solo afecta al desarrollo, no a producción.
  //esto ocurre como una ayuda para mantener los componentes puros, hablando del paradigma de la programación funcional
  useEffect(() => {
    //updateMetrics()
    return () => {
    }
  }, [])

  const addRandomMetric = () => {
    addMetric(createRandomMetric())
  }

  return (
    //Uso del frafment no es necesario aquí pero es útil para agrupar varios componentes sin crear nuevos niveles de anidación
    <>
      <div style={{ margin: 'auto', maxWidth: 500 }}>
        <ScatterChart metrics={metrics} />
      </div>
      <div>
        <Button name="Añadir métrica" onClick={addRandomMetric}>Añadir métrica </Button>
        <Button name="Enviar métricas" onClick={() => updateMetrics(metrics, setMetrics)}>Enviar métricas </Button>
      </div>
      <MetricsTable metrics={metrics} />
    </>
  );
};

export default Metrics;




