import routes
from appContext import AppContext

application = AppContext.app()

if __name__ == '__main__':
    application.run(port=5000, debug=True)
