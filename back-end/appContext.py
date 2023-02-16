from flask import Flask
from flask_cors import CORS


class AppContext():
    _app = None

    def __init__(self):
        raise Exception('call instance()')

    @classmethod
    def app(cls):
        if cls._app is None:
            cls._app = Flask(__name__)

            # cls._app.config.from_pyfile(config_filename) # ->
            # https://flask.palletsprojects.com/en/1.1.x/config/

            CORS(cls._app)
            cls._app.config['CORS_HEADERS'] = 'Content-Type'

        return cls._app
