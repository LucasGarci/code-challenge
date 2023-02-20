import { /*LOAD_DB_URL,*/ POST_TEST_URL } from "./constants.js"


//TODO: Set and alert for no server response
export const sendMetrics = (metrics, callback) => {
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


      //TODO: loadMetrics()
