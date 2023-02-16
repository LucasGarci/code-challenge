from flask import Flask, request
import sqlite3
from appContext import AppContext
from kmeans import kmeans
import ast

APPLICATION = AppContext.app()

# TODO Endpoint


@APPLICATION.route('/add_metric', methods=['POST'])
def add_metric():
    data = request.get_data()
    decoded_str = data.decode("UTF-8")
    dict_data = ast.literal_eval(decoded_str)
    conn = sqlite3.connect("metrics.db")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO metrics_table VALUES ('{0}','{1}','{2}','{3}'".format(dict_data.id, dict_data.modulesUsed, dict_data.usageTime, dict_data.group))
    conn.commit()
    conn.close()
    return "# TODO Endpoint"


# TODO Endpoint
@APPLICATION.route('/load_db_data', methods=['GET'])
def load_db_data():
    conn = sqlite3.connect("metrics.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM metrics_table")
    conn.commit()
    conn.close()
    return "# TODO Endpoint"


@APPLICATION.route('/k_means_enpoint', methods=['POST'])
def k_means_enpoint():
    data = request.get_data()
    print(type(data))

    decoded_str = data.decode("UTF-8")
    print(type(decoded_str))

    response = ast.literal_eval(decoded_str)
    print(type(response))
    response = kmeans(response)
    print(type(response))
    return response


def test_db():
    conn = sqlite3.connect("metrics.db")
    cursor = conn.cursor()
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS metrics(id TEXT, modules_used REAL, usage_time REAL)")
    conn.close()
