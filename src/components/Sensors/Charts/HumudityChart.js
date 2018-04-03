import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class HumudityChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [500, 565, 106, 365, 107, 365, 133, 221, 783, 1000],
                    label: "Hərarət",
                    borderColor: "#33658A",
                    fill: false
                },
                ]
            },
        }
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 50,
                                    suggestedMax: 100
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default HumudityChart;