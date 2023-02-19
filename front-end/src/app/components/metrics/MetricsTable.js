import Table from 'react-bootstrap/Table';
import React from 'react';

const MetricsTable = (props) => {
    if (props?.metrics.length) {
        return (<Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>date</th>
                    <th>modulesUsed</th>
                    <th>usageTime</th>
                    <th>group</th>
                </tr>
            </thead>
            <tbody>
                {props.metrics.map((element) => {
                    return (
                        <tr key={element.id}>
                            <td> {element.id}</td>
                            <td> {element.date}</td>
                            <td> {element.modulesUsed}</td>
                            <td> {element.usageTime}</td>
                            <td> {element.group}</td>
                        </tr>)
                })}
            </tbody>
        </Table>)
    }
    return null
}

export default MetricsTable