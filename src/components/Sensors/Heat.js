import React from 'react';
import HeatChart from '../Sensors/Charts/HeatChart';
import './Heat.css';
import { connect } from 'react-redux';
export class Heat extends React.Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-3">
                <div className="card-header h4" id="HeatCard">Hərarət</div>
                <div className="card-body">
                    <div className="HeatImgCover">
                        <img className="card-img-top" src="./public/img/heat.png" alt="Card image cap" />
                        <h1>{this.props.heat}</h1>
                    </div>
                    <div id="heatChart">
                        <HeatChart />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => (
    {
        heat: state.TempuratureReducer.heat
    }
)
Heat = connect(mapStateToProps)(Heat);
export default Heat;