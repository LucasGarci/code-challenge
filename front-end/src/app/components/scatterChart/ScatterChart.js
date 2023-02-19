import React from 'react';
import { Scatter } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const metricsToCharData = (metrics) => {
    const group_0 = metrics.filter(metric => metric.group === 0)
    const group_1 = metrics.filter(metric => metric.group === 1)
    const group_2 = metrics.filter(metric => metric.group === 2)

    const group_0_data = group_0.map((metric) => {
        return { "x": metric?.modulesUsed, "y": metric?.usageTime }
    })

    const group_1_data = group_1.map((metric) => {
        return { "x": metric?.modulesUsed, "y": metric?.usageTime }
    })
    const group_2_data = group_2.map((metric) => {
        return { "x": metric?.modulesUsed, "y": metric?.usageTime }
    })

    return {
        datasets: [
            {
                label: "Group A",
                data: group_0_data,
                backgroundColor: "rgba(250, 50, 50, 1)"
            },
            {
                label: "Group B",
                data: group_1_data,
                backgroundColor: "rgba(50, 50, 255, 1)"
            },
            {
                label: "Uncategorized",
                data: group_2_data,
                backgroundColor: "rgba(50, 250, 50, 1)"
            }
        ]
    };
}

const ScatterChart = (props) => {
    const metrics = props.metrics
    const chartData = metricsToCharData(metrics)
    return props?.metrics ? <Scatter options={chartOptions} data={chartData} /> : null

}
export default ScatterChart