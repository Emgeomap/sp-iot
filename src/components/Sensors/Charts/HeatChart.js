import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
class HeatChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["14:16", "14:16", "14:16", "14:16", "14:16", "14:16", "14:16", "14:16", "14:16"],
                datasets: [{
                    data: [15, 16, 26, 22, 29, 18, 30, 22, 24, 28],
                    label: "Hərarət",
                    borderColor: "#F6AE2D",
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

export default HeatChart;