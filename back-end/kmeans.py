from sklearn.cluster import KMeans


def kmeans(metrics):
    # cargamos los datos de entrenamiento
    X_values = [[x["modulesUsed"], x["usageTime"]] for x in metrics]

    # inicializamos el modelo de k-means con 2 clusters
    kmeans_model = KMeans(n_clusters=2, max_iter=1000,
                          n_init='auto').fit(X_values)

    # predecimos los grupos para cada dato
    labels = kmeans_model.predict(X_values)

    # Los clusters son 0 y 1 , así me aseguro de que el primer valor siempre es 0 pues a veces puede invertir los resultados
    if labels[0] == 1:
        labels = 1 - labels

    for index in range(0, len(labels)):
        metrics[index]["group"] = int(labels[index])

        # las métricas con los clusters asignados asignadas a cada dato
    return metrics
