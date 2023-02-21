import React, { useState, useEffect } from 'react';
import { createRandomMetric } from "./metricUtils"
import { useSelector } from 'react-redux'
import MetricsTable from "./MetricsTable"
import ScatterChart from "../scatterChart/ScatterChart"
import Counter from "../counter/Counter"
import { MyButton } from "../../styled/buttons"
import { sendMetrics } from "../../APIcalls"



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
    let newMetrics = []
    for (let i = 0; i < count; i++) {
      const one_new_metric = createRandomMetric()
      newMetrics.push(one_new_metric)
    }
    setMetrics([...metrics, ...newMetrics])
  }

  return (
    //Uso del frafment no es necesario aquí pero es útil para agrupar varios componentes sin crear nuevos niveles de anidación
    <>

      <div style={{ margin: 'auto', maxWidth: 900 }} >
        <h2>React KNN example</h2>
        <p>
          Este es un ejemplo de código en react para enviar datos mediante una request y procesarlos en un servidor categorizándolos usando Machine Learning mediante un modelo simple de aprendizaje no supervisado (KNN).
        </p>
        <p>
          El modelo de KNN (K-Nearest Neighbors) es comunmente utilizado para la clasificación y regresión de datos. El modelo se basa en la idea de que los puntos de datos que están cerca entre sí en un espacio de características (por ejemplo, un conjunto de características numéricas que describen cada punto) son similares entre sí y probablemente pertenecen a la misma clase. "Si sus características parecen las de un gato, será un gato"
        </p>
      </div>
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




