import React, { Component } from'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

/* var dataPoints = []; */

export default class Chart extends Component {
    render() {
        const options = {
            exportEnabled: true,
            title: 'Bitcoin Statistics',
            axisX: {
                valueFormatString: "D MMM"
            },
            axisY: {
                title: "Price",
				includeZero: false,
            },
            data: [{
				type: "candlestick",
				name: "Bitcoin Investement Statistics",
				showInLegend: true,
				yValueFormatString: "##0.00",
				xValueType: "dateTime",
				dataPoints: [
                    { x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
					{ x: new Date("2017-02-01"), y: [36.82, 36.95, 34.84, 36.20] },
					{ x: new Date("2017-03-01"), y: [35.85, 36.30, 34.66, 36.07] },
					{ x: new Date("2017-04-01"), y: [36.19, 37.50, 35.21, 36.15] },
					{ x: new Date("2017-05-01"), y: [36.11, 37.17, 35.02, 36.11] },
					{ x: new Date("2017-06-01"), y: [36.12, 36.57, 33.34, 33.74] },
					{ x: new Date("2017-07-01"), y: [33.51, 35.86, 33.23, 35.47] },
					{ x: new Date("2017-08-01"), y: [35.66, 36.70, 34.38, 35.07] },
					{ x: new Date("2017-09-01"), y: [35.24, 38.15, 34.93, 38.08] },
					{ x: new Date("2017-10-01"), y: [38.12, 45.80, 38.08, 45.49] },
					{ x: new Date("2017-11-01"), y: [45.97, 47.30, 43.77, 44.84] },
					{ x: new Date("2017-12-01"), y: [44.73, 47.64, 42.67, 46.16] }
                ]
			}]
        }

        return(
                <Container>
                    <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref}  *//>
                </Container>
            )
    }

    /* componentDidMount() {
        var chart = this.chart;
        fetch('https://canvasjs.com/data/gallery/react/microsoft-stock-price.json')
            .then((response) => {
                return response.json();
            })
                .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        dataPoints.push({
                            x: data[i].x,
                            y: data[i].y
                    });
                }

                chart.render();
        })
    } */
}