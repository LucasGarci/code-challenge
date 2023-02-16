//Nota: process.env.NODE_ENV es útil a modo de flag para agilizar el desarollo. 



export const POST_TEST_URL =
    process.env.NODE_ENV === 'production'
        ? 'http://127.0.0.1:5000/k_means_enpoint'
        : 'http://127.0.0.1:5000/k_means_enpoint'

//to use with componentDidMount
export const LOAD_DB_URL = "http://127.0.0.1:5000/load_db_data"