## FRONT-END

### Install node
El proyecto se ha realizado con Node 16.15.0 \
Siempre recomiendo la version Long Term Supported (LTS) https://nodejs.org/es/

En el directorio del proyecto code-test-front, puede ejecutar:
### `npm install`
Despues de descargar el proyecto será necesario instalar todas las dependencias. Para ello usamos "npm i"

### `npm start`
Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realice cambios. También puede ver errores del lintern en la consola.

### `npm test`
Inicia el corredor de prueba en el modo de reloj interactivo.\
Consulte la sección sobre [testing](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

## BACK-END

### Install node
El proyecto se ha realizado en python 10.4. Soporte hasta 10-2026.  \
Puedes descargando aquí:https://www.python.org/downloads/

En el directorio del proyecto code-test-back, podrás ejecutar:

### `pip install -r requirements.txt`
Con este comando podrás instalar las dependencias del proyecto.  \
Puedes crear un entorno virtual siguiendo estos pasos https://docs.python.org/3/library/venv.html o usar tu propia instalación de python.

### `python application.py`
El servidor arranca en http://127.0.0.1:5000

## Consideraciones:

Hay algunos comentarios a lo largo del código. Se pueden buacar mediante la palabra clave "Nota" o "TODO"

He aprovechado para usar ErrorBoundary, Fragments, Lazy Loading, Suspense y algún hook simple aunque algunas de estas características no eran necesarias.
No he usado otras características de react como el contexto o las referencias en este proyecto pero si las he usado anteriormente.

He distribuido agrupando toda la persistencia de la App en un mismo directorio pues se trata de un proyecto muy pequeño. Aunque personalmente me gusta poner las acciones, initualState y reductores de cada componente compartiendo directorio con dicho componente.

Soy consciente de que hay muchas cosas que no he puesto en el proyecto y podrían estar:
- Tests (y TDD)
- Bbdd (WIP)
- Autentificación
- Añadir Flow y comprobar tipado de IO (Flow.js y TypeScript son opciones excelentes)
- react- navigation or similar.
- Persistencia de datos (ej: redux: actions, reducers and storage y un initialState)

Una estructura que acostumbro a hacer es la siguiente

src/ \
----app/ \
--------asets/images/ \
--------lib/ \
------------utils/ \
------------styledComponents/ \
--------containers \
--------navigation \
------------router.js \
------------navBar.js \
--------i18n \
--------modules/ \
------------some_module/ \
----------------storage.js \
----------------initial_state.js \
----------------components/ \
--------------------someComponent/ \
------------------------someComponent.js \
------------------------actions.js \
------------------------reducers.js \


Como en cada módulo hay un initial_state y un storage luego uso un combinedReducer a la altura de app/ para seguir el principio de react de un solo origen de datos y propagación en cascada

A la altura de src/ tambien suelo colocar un archivo que yo llamo providersGate.js para poner el context provider, el storage provider de redux y el persisGate de redux persist

Por otro lado en la raiz de la app seguiría estableciendo un combinedReducer que me diera una visión general del total de la aplicación y un appReducer y appActions para los datos que sean comunes a toda la App.
