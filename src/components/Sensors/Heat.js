import React from 'react';
import HeatChart from '../Sensors/Charts/HeatChart';
import './Heat.css'
export default class Heat extends React.Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-3">
                <div className="card-header h4" id="HeatCard">Hərarət</div>
                <div className="card-body">
                    <div className="HeatImgCover">
                        <img className="card-img-top" src="./public/img/heat.png" alt="Card image cap" />
                        <h1>27 °C</h1>
                    </div>
                    <div id="heatChart">
                        <HeatChart />
                    </div>
                </div>
            </div>
        )
    }
}