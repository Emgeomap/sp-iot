import React from 'react';
import './Humidity.css';
import {connect} from 'react-redux';
import HumudityChart from '../Sensors/Charts/HumudityChart';

export class Humidity extends React.Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-3" id="HumidityCard">
                <div className="card-header h4">Nəm</div>
                <div className="card-body">
                    <div className="HumidityImgCover">
                        <img className="card-img-top" src="./public/img/humidity.png" alt="Card image cap" />
                        <h1>{this.props.humudity}%</h1>
                    </div>
                    <div id="humudityChart">
                        <HumudityChart />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => (
    {
        humudity: state.TempuratureReducer.humudity
    }
)
Humidity = connect(mapStateToProps)(Humidity);
export default Humidity;